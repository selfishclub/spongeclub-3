import Logo from './Logo';
import { config } from '@/lib/config';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero} id="top">
      {/* 골드 계열 블러 덩어리 2개 */}
      <div className={styles.blobs} aria-hidden="true">
        <span className={styles.blobA} />
        <span className={styles.blobB} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <Logo size="lg" />
        </div>

        <p className={styles.eyebrow}>스크린 파크골프 시장의 리더</p>

        <h1 className={styles.headline}>
          {config.HERO_HEADLINE.split('\n').map((line, i) => (
            <span key={i} className={styles.line}>
              {line}
            </span>
          ))}
        </h1>

        <p className={styles.sub}>{config.HERO_SUB}</p>

        <div className={styles.actions}>
          <a href="#inquiry" className="btn btn-primary">
            창업 상담 신청하기
          </a>
          <a href="#tech" className="btn btn-ghost">
            레저로가 뭔가요?
          </a>
        </div>
      </div>
    </header>
  );
}
