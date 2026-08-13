# Frontmatter 스키마

각 마크다운 파일 상단 YAML frontmatter에 들어가는 필드 정의입니다.

## 자기소개.md

> frontmatter는 운영용 메타데이터예요. 본문 카드의 📋 칸은 사전 서베이로 채웁니다.

| 필드 | 타입 | 필수 | 설명 | 예시 |
|------|------|:---:|------|------|
| `member` | string | ✅ | 이름 | `홍길동` |
| `조` | string | ✅ | 소속 조 (1~6) | `1` |
| `domain` | string | ⬜ | 직무 카테고리 (서베이) | `개발자·엔지니어` |

## 주차 submission.md (W1~W6)

| 필드 | 타입 | 필수 | 설명 | 예시 |
|------|------|:---:|------|------|
| `member` | string | ✅ | 멤버 닉네임 | `dani` |
| `조` | string | ✅ | 소속 조 | `1조` |
| `week` | number | ✅ | 주차 (1~6) | `1` |
| `type` | string | ✅ | 문서 유형 (고정값 `weekly`) | `weekly` |
| `title` | string | ✅ | 제출물 제목 | `첫 배포 성공` |
| `summary` | string | ✅ | 한 줄 요약 | `Vercel로 첫 배포 완료` |
| `date` | string | ✅ | 작성일 (YYYY-MM-DD) | `2026-08-13` |
