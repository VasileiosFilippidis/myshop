export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-dvh antialiased">
<header className="border-b">
<div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4">
<a href="/" className="font-semibold">MadeTogether</a>
<nav className="ml-auto flex gap-3 text-sm">
<a href="/candles">Candles</a>
<a href="/prints">3D Prints</a>
<a href="/auth">Sign in</a>
</nav>
</div>
</header>
<main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
</body>
</html>
);
}