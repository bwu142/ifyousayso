import LogoutButton from "@/components/LogoutButton";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5EFE8] font-alexandria">
      <h1 className="text-4xl font-medium text-[#659BB9] font-alumni">
        Good Morning. What will you do today?
      </h1>
      <p className="mt-4 text-zinc-600">
        (This is the goal page — we&apos;ll build it out next.)
      </p>
      <LogoutButton />
    </main>
  );
}
