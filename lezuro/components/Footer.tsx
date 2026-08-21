import Logo from './Logo';
import { config, company } from '@/lib/config';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <Logo size="md" />
        </div>

        <address className={styles.info}>
          <strong className={styles.name}>{company.name}</strong>
          <span>{company.ceo}</span>
          <span>{company.address}</span>
          <span>{company.bizNo}</span>
          <span>
            전화 <a href={`tel:${config.TEL.replace(/-/g, '')}`}>{config.TEL}</a>
          </span>
          <span>
            이메일 <a href={`mailto:${config.EMAIL}`}>{config.EMAIL}</a>
          </span>
        </address>

        <p className={styles.copy}>
          © {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
