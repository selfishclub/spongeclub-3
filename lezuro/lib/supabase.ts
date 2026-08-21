import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * anon 키로 만드는 Supabase 클라이언트입니다.
 *
 * anon 키는 공개되어도 되는 값입니다. 실제 보호는 RLS 정책이 합니다.
 * (supabase/migrations 참고 — inquiries 는 INSERT 만 허용되고 SELECT 는 막혀 있습니다.)
 *
 * service_role 키는 RLS 를 우회하므로 이 파일에서 절대 사용하지 않습니다.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** 환경변수가 없으면 null 을 돌려줍니다. 빌드는 깨지지 않고, 제출 시에만 안내가 나갑니다. */
export function getSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const isSupabaseConfigured = Boolean(url && anonKey);
