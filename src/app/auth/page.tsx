'use client';
import { supabaseBrowser } from '@/lib/supabase/client';
import { useState } from 'react';


export default function AuthPage() {
const sb = supabaseBrowser();
const [email, setEmail] = useState('');
const [sent, setSent] = useState(false);


async function signIn(e: React.FormEvent) {
e.preventDefault();
const { error } = await sb.auth.signInWithOtp({ email });
if (!error) setSent(true);
}


return (
<div className="max-w-sm">
<h1 className="text-xl font-semibold mb-2">Sign in</h1>
{sent ? (
<p>Check your email for the magic link.</p>
) : (
<form onSubmit={signIn} className="flex gap-2">
<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="border rounded px-3 py-2 flex-1" />
<button className="border rounded px-3">Send</button>
</form>
)}
</div>
);
}