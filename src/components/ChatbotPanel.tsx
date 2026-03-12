"use client";

import { useState } from "react";

type Question = {
  id: string;
  prompt: string;
  context: string;
};

type ChatbotPanelProps = {
  questions: Question[];
};

const sampleReplies = [
  "From WhatsApp today: Lab 3 deadline moved to March 20 at 11:59 PM.",
  "Google Classroom shows two open assignments due this week.",
  "I can summarize messages, deadlines, or help craft a reply."
];

export default function ChatbotPanel({ questions }: ChatbotPanelProps) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (draft.trim().length < 3) return;
    setMessages((prev) => [...prev, `You: ${draft}`]);
    const reply = sampleReplies[messages.length % sampleReplies.length];
    setMessages((prev) => [...prev, `SOT AI: ${reply}`]);
    setDraft("");
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Section 3</p>
          <h3 className="panel-title">Ask the Source of Truth</h3>
          <p className="panel-subtitle">
            AI chatbot trained on WhatsApp summary + Classroom tasks.
          </p>
        </div>
        <div className="badge">AI assistant</div>
      </div>
      <div className="chat-window">
        {messages.length === 0 ? (
          <div className="chat-empty">
            Ask a question about deadlines or today’s messages.
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={`${message}-${index}`} className="chat-line">
              {message}
            </div>
          ))
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask: What’s due this week?"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button className="button" type="button" onClick={handleSend}>
          Send
        </button>
      </div>
      <div className="question-list">
        {questions.map((item) => (
          <div key={item.id} className="question-card">
            <h4>{item.prompt}</h4>
            <p>{item.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
