import { createBrowserClient } from "@supabase/ssr";

// Use this in Client Components (files with "use client").
// It runs in the browser, so it only ever uses the public/anon key.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
