/**
 * 자주 바뀌는 값은 전부 이 파일 한 곳에만 둡니다.
 * 코드 다른 곳에 전화번호·문구·숫자를 직접 쓰지 마세요.
 * (v3 어드민을 붙일 때 이 파일이 그대로 편집 대상이 됩니다.)
 */

export const config = {
  /** 대표전화 — 배포 전에 이 한 줄만 실제 번호로 교체하세요. */
  TEL: '032-000-0000',

  EMAIL: 'gjparkgolf@naver.com',

  /** "영업일 기준 O일 이내에 연락드리겠습니다" 의 O */
  REPLY_DAYS: 2,

  HERO_HEADLINE: '파크골프 인구는 늘고 있습니다.\n매장은 아직 부족합니다.',
  HERO_SUB:
    '전국 150개 매장, 단독 플랫폼 이용자 20,000명. 레저로는 이미 검증된 시장에서 시작합니다.',

  STAT_USERS: '20,000+',
  STAT_STORES: '150개+',
  STAT_EVENTS: '5회',

  /** false 로 바꾸면 폼 대신 아래 마감 안내가 표시됩니다. */
  FORM_OPEN: true,
  FORM_CLOSED_MSG: '현재 상담 접수가 마감되었습니다',
} as const;

/** 푸터에 출력되는 사업자 정보 */
export const company = {
  name: '주식회사 국제파크골프',
  ceo: '대표이사 김용훈',
  address: '인천광역시 계양구 아나지로 524-1 (서운동)',
  bizNo: '사업자등록번호 104-86-26271',
} as const;
