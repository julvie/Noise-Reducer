import KeySummary from "@/components/KeySummary";
import QuestionPanel from "@/components/QuestionPanel";
import TodoList from "@/components/TodoList";
import TruthList from "@/components/TruthList";
import { triageDatabase } from "@/lib/triageDatabase";

export default function HomePage() {
  return (
    <div className="dashboard">
      <KeySummary
        date={triageDatabase.dailySummary.date}
        highlights={triageDatabase.dailySummary.keyHighlights}
      />
      <div className="dashboard-grid">
        <TodoList items={triageDatabase.todos} />
        <QuestionPanel questions={triageDatabase.questions} />
      </div>
      <TruthList items={triageDatabase.truths} />
    </div>
  );
}
