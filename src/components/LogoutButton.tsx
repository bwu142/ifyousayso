"use client";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";


export default function LogoutButton() {

  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button 
        onClick = {handleLogout}
        className = "text-black underline px-4 py-2 text-medium rounded-md hover:font-semibold">
        Log out
    </button>
  )
}