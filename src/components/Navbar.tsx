// src/components/Navbar.tsx
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let isAdmin = false;
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();
    isAdmin = !!profile?.is_admin;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          MadeTogether
        </Link>

        {/* Right-side links */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="px-3 py-1 border rounded hover:bg-neutral-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-3 py-1 rounded bg-black text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className="px-3 py-1 border rounded hover:bg-neutral-50"
                >
                  Admin
                </Link>
              )}
              <Link
                href="/logout"
                className="px-3 py-1 rounded bg-black text-white"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
