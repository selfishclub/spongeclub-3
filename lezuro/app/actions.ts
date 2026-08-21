'use server';

import { getSupabase } from '@/lib/supabase';
import { config } from '@/lib/config';
import type { FormState, SubmittedValues } from '@/lib/formState';

// 'use server' 파일은 async 함수만 export 할 수 있습니다.
// FormState 타입과 initialFormState 는 lib/formState.ts 에 있습니다.

/** 숫자만 남겼을 때 9~11자리면 국내 전화번호로 봅니다. */
function isValidPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length >= 9 && digits.length <= 11;
}

export async function submitInquiry(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  if (!config.FORM_OPEN) {
    return { status: 'error', message: config.FORM_CLOSED_MSG };
  }

  const name = String(formData.get('name') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const region = String(formData.get('region') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const agree = formData.get('agree') === 'on';

  // 브라우저 검증을 우회한 요청도 있으므로 서버에서 다시 검사합니다.
  const fieldErrors: FormState['fieldErrors'] = {};
  if (!name) fieldErrors.name = '성함을 입력해주세요';
  else if (name.length > 50) fieldErrors.name = '성함이 너무 깁니다';

  if (!phone) fieldErrors.phone = '연락처를 입력해주세요';
  else if (!isValidPhone(phone)) fieldErrors.phone = '연락처를 다시 확인해주세요';

  if (!region) fieldErrors.region = '희망지역을 입력해주세요';
  else if (region.length > 100) fieldErrors.region = '희망지역이 너무 깁니다';

  if (message.length > 2000) fieldErrors.message = '문의내용은 2,000자까지 입력할 수 있습니다';

  if (!agree) fieldErrors.agree = '개인정보 수집·이용에 동의해주세요';

  // 오류일 때는 사용자가 쓴 값을 그대로 돌려줍니다.
  // (React 19 가 액션 뒤 폼을 초기화하므로, 이 값이 defaultValue 가 되어 내용이 보존됩니다.)
  const values: SubmittedValues = { name, phone, region, message, agree };

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: '입력하신 내용을 다시 확인해주세요.',
      fieldErrors,
      values,
    };
  }

  const supabase = getSupabase();
  if (!supabase) {
    // 환경변수 미설정. 방문자에게 내부 사정을 노출하지 않고 대체 연락처를 안내합니다.
    console.error('[inquiries] Supabase 환경변수가 설정되지 않았습니다.');
    return {
      status: 'error',
      message: `지금은 접수가 어렵습니다. ${config.EMAIL} 으로 연락해주시면 바로 도와드리겠습니다.`,
      values,
    };
  }

  const { error } = await supabase.from('inquiries').insert({
    name,
    phone,
    region,
    message: message || null,
  });

  if (error) {
    console.error('[inquiries] insert 실패:', error.message);
    return {
      status: 'error',
      message: `접수 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나 ${config.EMAIL} 으로 연락해주세요.`,
      values,
    };
  }

  return { status: 'success' };
}
