// src/app/login/page.tsx
import { redirect } from "next/navigation";
import { createActionClient } from "@/lib/supabase";

export default function LoginPage() {
  async function login(formData: FormData) {
    "use server";
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const supabase = await createActionClient(); // <- IMPORTANT
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);

    // ensure a profile row exists (harmless if already there)
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.id) {
      await supabase.from("profiles").upsert({ id: user.id });
    }

    // go to admin (or home)
    redirect("/admin");
  }

  return (
    <form action={login} className="max-w-sm mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <input name="email" type="email" required className="border p-2 rounded w-full" />
      <input name="password" type="password" required className="border p-2 rounded w-full" />
      <button className="bg-black text-white rounded px-4 py-2 w-full">Sign In</button>
    </form>
  );
}
