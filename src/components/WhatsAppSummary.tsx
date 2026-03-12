"use client";

type WhatsAppSummaryProps = {
  date: string;
  highlights: string[];
  connected: boolean;
  accountLabel: string;
  lastSync: string;
};

export default function WhatsAppSummary({
  date,
  highlights,
  connected,
  accountLabel,
  lastSync
}: WhatsAppSummaryProps) {
  return (
    <section className="panel panel-hero">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Section 1</p>
          <h2 className="panel-title">WhatsApp Daily Summary</h2>
          <p className="panel-subtitle">Key information for {date}</p>
        </div>
        <div className="connection-card">
          <p className="connection-title">WhatsApp</p>
          <p className="connection-status">
            {connected ? "Connected" : "Not connected"}
          </p>
          <p className="connection-meta">{accountLabel}</p>
          <p className="connection-meta">Last sync: {lastSync}</p>
          <button className="button" type="button">
            {connected ? "Manage Connection" : "Connect WhatsApp"}
          </button>
        </div>
      </div>
      <div className="summary-grid">
        {highlights.map((item, index) => (
          <div key={`${item}-${index}`} className="summary-card">
            <div className="summary-index">{String(index + 1).padStart(2, "0")}</div>
            <p className="summary-text">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
