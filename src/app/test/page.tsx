import { createClient } from "@/lib/supabase/server";

// TEMPORARY page to verify the Supabase connection. Delete after confirming.
export default async function TestPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("connection_test").select();

  return (
    <div style={{ padding: 40, fontFamily: "monospace" }}>
      <h1>Supabase connection test</h1>
      {error ? (
        <pre style={{ color: "crimson" }}>Error: {error.message}</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
