"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import { PlusIcon } from "lucide-react";
import {useState, useRef, useEffect} from "react";

const links = [
  { href: "/", label: "Today" },
  { href: "/calendar", label: "Calendar" },
  { href: "/projects", label: "Projects" },
  { href: "/social", label: "Social" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  })

  return (
    <nav className="flex items-center justify-between bg-[#414A5A] px-5 py-2 font-alexandria text-white">
      {/* <Link href="/" className="text-2xl font-medium font-alumni">
        ifyousayso
      </Link> */}

      <div className="flex items-center gap-10">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg transition-colors hover:text-white ${
                isActive ? "font-semibold underline underline-offset-4" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div ref = {menuRef} className = "relative flex item-center">
        <button
          type = "button"
          className = "h-10 w-10 rounded-full bg-gray-400"
          onClick = {() => setMenuOpen(!menuOpen)}
        >
          
        </button>

        {menuOpen && (
          <div className = "absolute right-0 top-full w-48 -mt-2 bg-white rounded-md shadow-xl overflow-hidden origin-top-right animate-in fade-in zoom-in duration-200">
            <Link 
              href = "/profile"
              className = "block px-4 py-2 text-black hover:bg-zinc-100"
            >
              View Profile
            </Link>
            <Link 
              href = "/settings"
              className = "block px-4 py-2 text-black hover:bg-zinc-100"
            >
              Settings
            </Link>
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
}
