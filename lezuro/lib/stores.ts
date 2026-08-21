/**
 * 매장 갤러리 목록.
 *
 * 사진은 public/stores/ 에 넣고 파일명을 image 에 적습니다. (예: 'gyeyang.jpg')
 * 사진이 아직 없으면 image 를 비워두세요 — 회색 배경 + 매장명으로 표시됩니다.
 * v1 에서는 업로드 기능을 만들지 않습니다.
 */
export type Store = { name: string; region: string; image?: string };

export const stores: Store[] = [
  { name: '인천계양점', region: '수도권' },
  { name: '서울강서점', region: '수도권' },
  { name: '경기부천점', region: '수도권' },
  { name: '강원원주점', region: '강원' },
  { name: '대전유성점', region: '충청' },
  { name: '전북전주점', region: '전라' },
  { name: '부산해운대점', region: '경상' },
  { name: '제주시청점', region: '제주' },
];
