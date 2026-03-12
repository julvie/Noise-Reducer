import ChatbotPanel from "@/components/ChatbotPanel";
import ClassroomTodo from "@/components/ClassroomTodo";
import DateScroller from "@/components/DateScroller";
import WhatsAppSummary from "@/components/WhatsAppSummary";
import { triageDatabase } from "@/lib/triageDatabase";

export default function HomePage() {
  return (
    <div className="dashboard">
      <DateScroller
        dates={triageDatabase.dateOptions}
        activeDate={triageDatabase.dailySummary.date}
      />
      <WhatsAppSummary
        date={triageDatabase.dailySummary.date}
        highlights={triageDatabase.dailySummary.keyHighlights}
        connected={triageDatabase.whatsapp.connected}
        accountLabel={triageDatabase.whatsapp.accountLabel}
        lastSync={triageDatabase.whatsapp.lastSync}
      />
      <div className="dashboard-grid">
        <ClassroomTodo items={triageDatabase.todos} />
        <ChatbotPanel questions={triageDatabase.questions} />
      </div>
    </div>
  );
}
