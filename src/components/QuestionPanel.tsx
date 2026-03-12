"use client";

import { useState } from "react";

type Question = {
  id: string;
  prompt: string;
  context: string;
};

type QuestionPanelProps = {
  questions: Question[];
};

export default function QuestionPanel({ questions }: QuestionPanelProps) {
  const [draft, setDraft] = useState("");

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Questions</p>
          <h3 className="panel-title">Ask the Channel</h3>
        </div>
        <div className="badge">Open threads</div>
      </div>
      <div className="question-list">
        {questions.map((item) => (
          <div key={item.id} className="question-card">
            <h4>{item.prompt}</h4>
            <p>{item.context}</p>
            <div className="question-actions">
              <button className="button ghost" type="button">
                Assign to Rep
              </button>
              <button className="button" type="button">
                Pin for Professor
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="question-compose">
        <label htmlFor="question" className="eyebrow">
          New question
        </label>
        <textarea
          id="question"
          placeholder="Ask a clarifying question for the high-authority sources..."
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button className="button" type="button" disabled={draft.trim().length < 8}>
          Send question
        </button>
      </div>
    </section>
  );
}
