/**
 * 폼 상태 타입과 초기값.
 *
 * 'use server' 파일은 async 함수만 export 할 수 있어서
 * 타입과 초기값 객체는 이 파일에 따로 둡니다.
 */

export type FieldName = 'name' | 'phone' | 'region' | 'message' | 'agree';

/** 검증에 걸렸을 때 되돌려주는 입력값 */
export type SubmittedValues = {
  name: string;
  phone: string;
  region: string;
  message: string;
  agree: boolean;
};

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  /** 입력칸별 오류 메시지 */
  fieldErrors?: Partial<Record<FieldName, string>>;
  /**
   * 사용자가 방금 넣은 값.
   *
   * React 19 는 액션이 끝나면 폼을 초기화합니다(form.reset()).
   * reset 은 각 입력칸을 defaultValue 로 되돌리므로,
   * 이 값을 defaultValue 로 넘겨 사용자가 쓴 내용이 날아가지 않게 합니다.
   */
  values?: SubmittedValues;
};

export const initialFormState: FormState = { status: 'idle' };
