'use client';

import { useActionState, useState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitInquiry } from '@/app/actions';
import { initialFormState } from '@/lib/formState';
import { config } from '@/lib/config';
import styles from './InquiryForm.module.css';

export default function InquiryForm() {
  const [state, formAction] = useActionState(submitInquiry, initialFormState);
  const doneRef = useRef<HTMLDivElement>(null);

  // 동의하기 전에는 제출 버튼을 누를 수 없습니다.
  // React 19 는 액션이 끝나면 폼을 초기화하므로, 서버가 돌려준 값으로 다시 맞춥니다.
  const [agreed, setAgreed] = useState(false);
  useEffect(() => {
    if (state.status === 'error') setAgreed(Boolean(state.values?.agree));
  }, [state]);

  // 접수 완료 시 안내로 초점을 옮겨 스크린리더 사용자도 결과를 바로 듣게 합니다.
  useEffect(() => {
    if (state.status === 'success') doneRef.current?.focus();
  }, [state.status]);

  if (state.status === 'success') {
    return (
      <div
        className={styles.done}
        ref={doneRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
      >
        <span className={styles.doneIcon} aria-hidden="true">
          ✓
        </span>
        <p className={styles.doneTitle}>접수되었습니다.</p>
        <p className={styles.doneBody}>
          영업일 기준 {config.REPLY_DAYS}일 이내에 담당자가 연락드리겠습니다.
          <br />
          급하신 경우 <a href={`mailto:${config.EMAIL}`}>{config.EMAIL}</a> 으로
          메일 주셔도 됩니다.
        </p>
      </div>
    );
  }

  const v = state.values;

  return (
    <form action={formAction} className={styles.form} noValidate>
      <Field
        label="이름"
        name="name"
        required
        placeholder="성함을 입력해주세요"
        autoComplete="name"
        maxLength={50}
        defaultValue={v?.name ?? ''}
        error={state.fieldErrors?.name}
      />

      <Field
        label="연락처"
        name="phone"
        type="tel"
        required
        placeholder="010-0000-0000"
        inputMode="tel"
        autoComplete="tel"
        maxLength={30}
        defaultValue={v?.phone ?? ''}
        error={state.fieldErrors?.phone}
      />

      <Field
        label="희망지역"
        name="region"
        required
        placeholder="예: 인천 계양구"
        maxLength={100}
        defaultValue={v?.region ?? ''}
        error={state.fieldErrors?.region}
      />

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          문의내용 <span className={styles.optional}>선택</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="궁금한 점을 자유롭게 적어주세요 (선택)"
          className={styles.textarea}
          defaultValue={v?.message ?? ''}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          aria-describedby={state.fieldErrors?.message ? 'message-error' : undefined}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className={styles.error}>
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <div className={styles.agreeBox}>
        <label className={styles.agree}>
          <input
            type="checkbox"
            name="agree"
            /*
              controlled 로 두면 액션 뒤 form.reset() 과 어긋나
              "체크는 풀렸는데 버튼은 활성" 인 상태가 됩니다.
              defaultChecked 로 두어 reset 이 서버가 돌려준 값으로 되돌리게 합니다.
            */
            defaultChecked={v?.agree ?? false}
            onChange={(e) => setAgreed(e.target.checked)}
            className={styles.checkbox}
            aria-describedby="agree-note"
          />
          <span>
            <strong>[필수]</strong> 상담 목적의 개인정보 수집·이용에 동의합니다
          </span>
        </label>
        <p id="agree-note" className={styles.agreeNote}>
          수집 항목: 이름, 연락처, 희망지역, 문의내용 · 이용 목적: 창업 상담 회신 ·
          보유 기간: 상담 종료 후 1년
        </p>
        {state.fieldErrors?.agree && (
          <p className={styles.error}>{state.fieldErrors.agree}</p>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <p className={styles.formError} role="alert">
          {state.message}
        </p>
      )}

      <SubmitButton disabled={!agreed} />
    </form>
  );
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`btn btn-primary ${styles.submit}`}
      disabled={disabled || pending}
    >
      {pending ? '접수 중…' : '상담 신청하기'}
    </button>
  );
}

function Field({
  label,
  name,
  error,
  required,
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${name}-error`;
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}{' '}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className={styles.input}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
