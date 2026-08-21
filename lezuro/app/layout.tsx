import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '레저로 스크린파크골프 창업 상담 | 전국 150개 매장',
  description:
    '단독 플랫폼 이용자 20,000명, 전국 150개 매장. 스크린파크골프 시장의 리더 레저로 창업 상담을 신청하세요.',
  keywords: [
    '스크린파크골프 창업',
    '스크린 파크골프',
    '파크골프 창업',
    '레저로',
    'LEZURO',
  ],
  openGraph: {
    title: '레저로 스크린파크골프 창업 상담',
    description:
      '전국 150개 매장, 단독 플랫폼 이용자 20,000명. 이미 검증된 시장에서 시작하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="no-js">
      <head>
        {/* 스크립트가 살아 있으면 no-js 를 벗겨 스크롤 등장 애니메이션을 켭니다. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        {children}
        <Grain />
      </body>
    </html>
  );
}

/** 화면 전체에 고정되는 노이즈 레이어 */
function Grain() {
  return (
    <svg className="grain" aria-hidden="true">
      <filter id="grain-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}
