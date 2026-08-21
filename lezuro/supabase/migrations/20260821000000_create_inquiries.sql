-- 레저로 창업상담 문의 테이블
-- 방문자(anon)는 문의를 남길 수만 있고, 남의 문의를 읽을 수는 없습니다.

create table if not exists public.inquiries (
  id          bigint generated always as identity primary key,
  name        text        not null,
  phone       text        not null,
  region      text        not null,
  message     text,
  created_at  timestamptz not null default now(),

  -- 빈 문자열이 필수값으로 통과하는 것을 DB 단에서 막습니다.
  constraint inquiries_name_not_blank   check (btrim(name)   <> ''),
  constraint inquiries_phone_not_blank  check (btrim(phone)  <> ''),
  constraint inquiries_region_not_blank check (btrim(region) <> ''),

  -- 폼에서 길이를 제한하더라도, 우회 요청으로 대용량이 들어오는 것을 막습니다.
  constraint inquiries_name_len    check (char_length(name)    <= 50),
  constraint inquiries_phone_len   check (char_length(phone)   <= 30),
  constraint inquiries_region_len  check (char_length(region)  <= 100),
  constraint inquiries_message_len check (message is null or char_length(message) <= 2000)
);

comment on table  public.inquiries is '창업 상담 신청 (랜딩 폼 제출)';
comment on column public.inquiries.name    is '신청자 이름';
comment on column public.inquiries.phone   is '연락처';
comment on column public.inquiries.region  is '희망 개설 지역';
comment on column public.inquiries.message is '문의내용 (선택)';

-- 관리자가 최신순으로 확인할 때 쓰는 인덱스 (v3 어드민용)
create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);


-- ─────────────────────────────────────────────────────────────
-- RLS (행 수준 보안)
-- ─────────────────────────────────────────────────────────────
-- RLS 를 켜면 정책으로 허용한 동작 외에는 전부 차단됩니다.
-- 정책을 하나도 만들지 않으면 INSERT 조차 막혀서 "저장이 안 되는" 상태가 됩니다.

alter table public.inquiries enable row level security;

-- 'force row level security' 는 일부러 켜지 않습니다.
-- 그것을 켜면 테이블 소유자까지 정책에 묶여서,
-- Supabase 대시보드의 Table Editor 로 문의를 열람하지 못할 수 있습니다.
-- 방문자 차단은 아래 정책과 GRANT 만으로 충분합니다.

-- 재실행해도 안전하도록 기존 정책을 먼저 제거합니다.
drop policy if exists "anon can submit inquiry"   on public.inquiries;
drop policy if exists "authenticated can submit"  on public.inquiries;

-- ① 익명 방문자: INSERT 만 허용
--    with check (true) — 넣으려는 행이 정책을 통과하는지 검사하는 조건.
--    (INSERT 정책에는 using 절이 없습니다. 읽을 기존 행이 없기 때문입니다.)
create policy "anon can submit inquiry"
  on public.inquiries
  for insert
  to anon
  with check (true);

-- ② 로그인 사용자도 동일하게 제출만 허용
--    (익명 세션이 아닌 상태로 폼을 쓰는 경우를 대비)
create policy "authenticated can submit"
  on public.inquiries
  for insert
  to authenticated
  with check (true);

-- ③ SELECT / UPDATE / DELETE 정책은 "일부러" 만들지 않습니다.
--    정책이 없으면 anon·authenticated 는 조회·수정·삭제가 전부 차단됩니다.
--    → 방문자는 남의 문의를 읽을 수 없습니다.
--    관리자는 Supabase 대시보드(Table Editor)나 service_role 키로만 열람합니다.
--    service_role 키는 RLS 를 우회하므로 절대 프론트엔드에 넣지 마세요.


-- ─────────────────────────────────────────────────────────────
-- 테이블 권한
-- ─────────────────────────────────────────────────────────────
-- RLS 는 "행" 단위 통제이고, GRANT 는 "테이블" 단위 통제입니다.
-- 둘 다 통과해야 동작하므로 INSERT 권한만 명시적으로 부여합니다.

-- 방문자(anon)와 로그인 사용자: 넣기만 가능
revoke all on public.inquiries from anon, authenticated;
grant insert on public.inquiries to anon, authenticated;

-- 관리자(service_role): 전부 가능.
-- Supabase 는 보통 기본 권한으로 이미 부여하지만, 암묵적 기본값에 기대지 않고
-- 여기서 명시합니다. 이게 없으면 v3 어드민에서 문의를 읽지 못할 수 있습니다.
grant all on public.inquiries to service_role;

-- id 가 identity 컬럼이라 시퀀스 usage 권한은 따로 필요하지 않습니다.
