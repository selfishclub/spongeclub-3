import styles from './Logo.module.css';

/** LEZURO 워드마크. 위에 파랑·노랑·빨강 3색 바가 붙습니다. */
export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <span className={styles.bars} aria-hidden="true">
        <i className={styles.blue} />
        <i className={styles.yellow} />
        <i className={styles.red} />
      </span>
      <span className={styles.word}>LEZURO</span>
    </span>
  );
}
