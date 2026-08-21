'use client';

import { useEffect, useRef, useState } from 'react';
import { config } from '@/lib/config';
import styles from './Stats.module.css';

type Stat = { value: string; label: string; note: string };

const STATS: Stat[] = [
  { value: config.STAT_USERS, label: '단독 플랫폼 이용자', note: '2026.01 기준' },
  { value: config.STAT_STORES, label: '전국 매장', note: '7개 권역 진출 완료' },
  { value: config.STAT_EVENTS, label: '전국 규모 대회 개최', note: '회당 1,000여 명 참가' },
];

export default function Stats() {
  return (
    <section className={styles.section} aria-label="주요 수치">
      <div className={`container ${styles.grid}`}>
        {STATS.map((s, i) => (
          <StatItem key={s.label} stat={s} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

/**
 * "20,000+" 같은 문자열에서 숫자만 세어 올리고,
 * 앞뒤에 붙은 기호·단위는 그대로 둡니다.
 */
function parse(value: string) {
  const match = value.match(/[\d,]+/);
  if (!match) return null;
  const digits = match[0];
  const target = Number(digits.replace(/,/g, ''));
  if (!Number.isFinite(target)) return null;
  return {
    target,
    prefix: value.slice(0, match.index ?? 0),
    suffix: value.slice((match.index ?? 0) + digits.length),
    grouped: digits.includes(','),
  };
}

function StatItem({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(stat.value);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parsed = parse(stat.value);

    if (reduced || !parsed) {
      setVisible(true);
      return;
    }

    // 화면에 들어오기 전까지는 0 으로 두고, 들어오면 세어 올립니다.
    setDisplay(`${parsed.prefix}0${parsed.suffix}`);

    // 카운트 도중 언마운트되면 정리할 수 있도록 프레임 번호를 밖에 둡니다.
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setVisible(true);

        const DURATION = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          // 끝에서 부드럽게 멈추도록
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(parsed.target * eased);
          const text = parsed.grouped ? current.toLocaleString('ko-KR') : String(current);
          setDisplay(`${parsed.prefix}${text}${parsed.suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stat.value]);

  return (
    <div
      ref={ref}
      className={`${styles.item} reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* 카운트업 도중 값이 계속 읽히지 않도록 최종값만 스크린리더에 전달합니다. */}
      <div className={styles.value} aria-hidden="true">
        {display}
      </div>
      <span className={styles.srOnly}>{stat.value}</span>
      <div className={styles.label}>{stat.label}</div>
      <div className={styles.note}>{stat.note}</div>
    </div>
  );
}
