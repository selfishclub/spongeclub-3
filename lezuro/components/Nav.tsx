import Logo from './Logo';
import styles from './Nav.module.css';

/** 스크롤해도 따라오는 알약 모양 상단 바 */
export default function Nav() {
  return (
    <div className={styles.wrap}>
      <nav className={styles.pill} aria-label="주요">
        <a href="#top" className={styles.brand} aria-label="레저로 홈">
          <Logo size="sm" />
        </a>
        <a href="#inquiry" className={styles.cta}>
          상담 신청
        </a>
      </nav>
    </div>
  );
}
