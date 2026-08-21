import Reveal from './Reveal';
import InquiryForm from './InquiryForm';
import { config } from '@/lib/config';
import styles from './Inquiry.module.css';

export default function Inquiry() {
  return (
    <section id="inquiry" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className="section-title">창업 상담 신청</h2>
          <p className="section-sub">
            연락처를 남겨주시면 담당자가 직접 연락드립니다. 상담은 무료이며, 부담
            없이 문의하셔도 됩니다.
          </p>
        </Reveal>

        <Reveal delay={80}>
          {config.FORM_OPEN ? (
            <InquiryForm />
          ) : (
            <div className={styles.closed}>
              <p className={styles.closedMsg}>{config.FORM_CLOSED_MSG}</p>
              <p className={styles.closedSub}>
                문의는 <a href={`mailto:${config.EMAIL}`}>{config.EMAIL}</a> 으로
                보내주세요.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
