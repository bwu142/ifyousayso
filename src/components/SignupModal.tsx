"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

// Props: the parent controls whether the modal is open, and gives us
// a way to tell it to close. This is the standard "controlled component" pattern.
type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SignupModal({ open, onClose }: SignupModalProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  // If the parent says we're closed, render nothing.
  if (!open) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); // prevent the default form submission behavior (reloading the entire page)
    setError(null); // clears any previous error messages

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: { data: { username: username } },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  }

  return (
    /* modal background overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      {/* modal content */}
      <div
        className="relative w-[90%] max-w-md rounded-xl bg-[#F5EFE8] p-8 shadow-2xl font-alexandria"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-xl text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
        >
          &times;
        </button>

        {success ? (
          <p className="text-[#659BB9] text-center font-alexandria font-semibold mt-2">
            Account created! You can close this and log in.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h2 className="mb-6 text-2xl font-medium text-center font-alexandria text-black">Create Account</h2>
            <input
              className="rounded-md border border-zinc-300 px-4 py-3 bg-[#E8F0FE] text-black focus:outline-none focus:ring-2 focus:ring-[#122c4f]"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="rounded-md border border-zinc-300 px-4 py-3 bg-[#E8F0FE] text-black focus:outline-none focus:ring-2 focus:ring-[#122c4f]"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="rounded-md border border-zinc-300 px-4 py-3 bg-[#E8F0FE] text-black focus:outline-none focus:ring-2 focus:ring-[#122c4f]"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="mt-2 rounded-3xl bg-[#383533] py-3 text-white opacity-100 hover:opacity-90"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
