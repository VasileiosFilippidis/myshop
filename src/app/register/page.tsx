import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export default function RegisterPage() {
  async function register(formData: FormData) {
    'use server';
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const supabase = await createClient();

    const { error, data } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);

    // optional: insert into profiles
    await supabase.from('profiles').insert({ id: data.user?.id });

    redirect('/login');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50">
      <form action={register} className="bg-white p-6 rounded shadow w-80 space-y-3">
        <h1 className="text-2xl font-semibold mb-3 text-center">Register</h1>
        <input name="email" type="email" placeholder="Email" required className="border p-2 w-full rounded" />
        <input name="password" type="password" placeholder="Password" required className="border p-2 w-full rounded" />
        <button className="w-full py-2 bg-black text-white rounded">Register</button>
        <p className="text-center text-sm">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </form>
    </main>
  );
}
