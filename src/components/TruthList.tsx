"use client";

import { useState } from "react";

type ConflictEntry = {
  id: string;
  summary: string;
  changedBy: string;
  changedAt: string;
};

type TruthItem = {
  id: string;
  bucket: "Actionable" | "Resources" | "Logistics";
  summary: string;
  verifiedBy: string;
  authorityLevel: 1 | 2 | 3 | 4;
  sourceApp: "Telegram" | "Discord" | "Email" | "WhatsApp" | "Matrix";
  sourceLink: string;
  updatedAt: string;
  conflicts: ConflictEntry[];
};

type TruthListProps = {
  items: TruthItem[];
};

const bucketLabels: Record<TruthItem["bucket"], string> = {
  Actionable: "[Actionable] Deadlines & Exam Dates",
  Resources: "[Resources] Links, PDFs, and Reading Lists",
  Logistics: "[Logistics] Room changes or Zoom links"
};

export default function TruthList({ items }: TruthListProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="panel panel-wide">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Verified Truth</p>
          <h3 className="panel-title">Source of Truth Feed</h3>
        </div>
        <div className="badge">Authority-weighted</div>
      </div>
      <div className="truth-list">
        {items.map((item) => {
          const showConflicts = openId === item.id;
          return (
            <div key={item.id} className="truth-item">
              <div className="truth-main">
                <div>
                  <p className="truth-bucket">{bucketLabels[item.bucket]}</p>
                  <h4 className="truth-summary">{item.summary}</h4>
                  <div className="truth-meta">
                    <span>Verified by {item.verifiedBy}</span>
                    <span>Level {item.authorityLevel}</span>
                    <span>{item.sourceApp}</span>
                    <span>{item.updatedAt}</span>
                  </div>
                </div>
                <div className="truth-actions">
                  <a className="button ghost" href={item.sourceLink} target="_blank">
                    Deep Link
                  </a>
                  <button
                    className="button"
                    type="button"
                    onClick={() => setOpenId(showConflicts ? null : item.id)}
                  >
                    {showConflicts ? "Hide History" : "Conflict History"}
                  </button>
                </div>
              </div>
              {showConflicts && (
                <div className="conflicts">
                  {item.conflicts.length === 0 ? (
                    <p className="conflict-empty">
                      No conflicts recorded for this truth.
                    </p>
                  ) : (
                    item.conflicts.map((conflict) => (
                      <div key={conflict.id} className="conflict-card">
                        <p className="conflict-summary">{conflict.summary}</p>
                        <p className="conflict-meta">
                          {conflict.changedBy} • {conflict.changedAt}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
