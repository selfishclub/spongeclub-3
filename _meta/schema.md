# Frontmatter 스키마

각 마크다운 파일 상단 YAML frontmatter에 들어가는 필드 정의입니다.

## 자기소개.md

> 1회차(셋업데이) 폴더에 있습니다. frontmatter는 운영용 메타데이터예요.

| 필드 | 타입 | 필수 | 설명 | 예시 |
|------|------|:---:|------|------|
| `member` | string | ✅ | 이름 | `홍길동` |
| `조` | string | ✅ | 소속 조 (1~6) | `1` |
| `domain` | string | ⬜ | 직무 카테고리 | `마케터` |

## 회차 submission.md (2~6회차)

| 필드 | 타입 | 필수 | 설명 | 예시 |
|------|------|:---:|------|------|
| `member` | string | ✅ | 멤버 닉네임 | `디제이` |
| `조` | string | ✅ | 소속 조 | `1조` |
| `week` | number | ✅ | 회차 (2~6) | `2` |
| `type` | string | ✅ | 문서 유형 (고정값 `weekly`) | `weekly` |
| `title` | string | ✅ | 제출물 제목 | `첫 배포 성공` |
| `date` | string | ✅ | 작성일 (YYYY-MM-DD) | `2026-09-10` |

## 4_study 스터디자료.md

| 필드 | 타입 | 필수 | 설명 | 예시 |
|------|------|:---:|------|------|
| `member` | string | ✅ | 올린 사람 닉네임 | `디제이` |
| `조` | string | ✅ | 소속 조 | `1조` |
| `type` | string | ✅ | 문서 유형 (고정값 `study`) | `study` |
| `title` | string | ✅ | 자료 제목 | `Claude Code 훅 입문` |
| `category` | string | ⬜ | 읽을거리 / 영상 / 도구 / 주제 | `영상` |
| `date` | string | ✅ | 올린 날짜 (YYYY-MM-DD) | `2026-09-10` |
