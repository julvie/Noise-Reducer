"use client";

type KeySummaryProps = {
  date: string;
  highlights: string[];
};

export default function KeySummary({ date, highlights }: KeySummaryProps) {
  return (
    <section className="panel panel-hero">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Key Summary</p>
          <h2 className="panel-title">Daily Signal</h2>
        </div>
        <div className="badge">{date}</div>
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
