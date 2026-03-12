import "./globals.css";

export const metadata = {
  title: "Source of Truth Dashboard",
  description: "Human-first aggregator for verified student communications."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="brand">
              <span className="brand-mark">SOT</span>
              <div>
                <p className="brand-eyebrow">Human-First Aggregator</p>
                <h1>Source of Truth</h1>
              </div>
            </div>
            <nav className="app-nav">
              <button className="button ghost" type="button">
                Ingestion Health
              </button>
              <button className="button" type="button">
                Create Digest
              </button>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
