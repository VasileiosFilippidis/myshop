export default function FAQPage() {
  return (
    <div className="container-page max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <details className="card p-4" open>
        <summary className="font-medium">Do you ship across Greece?</summary>
        <p className="mt-2 text-black/70">Yes. We typically ship with BoxNow or ACS; delivery 1–4 business days.</p>
      </details>
      <details className="card p-4">
        <summary className="font-medium">Returns?</summary>
        <p className="mt-2 text-black/70">If anything arrives damaged, contact us within 7 days and we`ll make it right.</p>
      </details>
      <details className="card p-4">
        <summary className="font-medium">Custom 3D parts?</summary>
        <p className="mt-2 text-black/70">Email us your idea with photos or dimensions — we`ll quote and lead time.</p>
      </details>
    </div>
  );
}