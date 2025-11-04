export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="container-page py-10 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} MadeTogether</div>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/faq">FAQ</a>
          <a className="hover:underline" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
