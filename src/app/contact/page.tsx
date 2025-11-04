"use client";

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to API or show a toast. For now do nothing.
  }

  return (
    <div className="container-page grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold mb-2">Contact</h1>
        <p className="text-black/70 mb-4">Send us a note and we'll get back soon.</p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input className="input" placeholder="Name" required />
          <input className="input" type="email" placeholder="Email" required />
          <textarea className="input min-h-28" placeholder="Message" />
          <button className="btn-ghost">Send</button>
        </form>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-2">Other ways</h2>
        <ul className="space-y-2 text-black/80">
          <li>Email: <a className="underline" href="mailto:hello@madetogether.gr">hello@madetogether.gr</a></li>
          <li>Phone: <a className="underline" href="tel:+3069XXXXXXX">+30 69X XXX XXXX</a></li>
          <li>Instagram: <a className="underline" href="#">@madetogether.gr</a></li>
        </ul>
      </div>
    </div>
  );
}
