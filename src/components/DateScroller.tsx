"use client";

type DateScrollerProps = {
  dates: string[];
  activeDate: string;
};

export default function DateScroller({ dates, activeDate }: DateScrollerProps) {
  return (
    <section className="date-scroller">
      <div className="date-track">
        {dates.map((date) => (
          <button
            key={date}
            type="button"
            className={`date-pill ${date === activeDate ? "active" : ""}`}
          >
            {date}
          </button>
        ))}
      </div>
    </section>
  );
}
