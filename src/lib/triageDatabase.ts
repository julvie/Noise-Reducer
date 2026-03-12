export type AuthorityLevel = 1 | 2 | 3 | 4;

export type SourceApp = "Telegram" | "Discord" | "Email" | "WhatsApp" | "Matrix";

export type TruthBucket = "Actionable" | "Resources" | "Logistics";

export type ConflictEntry = {
  id: string;
  summary: string;
  changedBy: string;
  changedAt: string;
};

export type TruthItem = {
  id: string;
  bucket: TruthBucket;
  summary: string;
  verifiedBy: string;
  authorityLevel: AuthorityLevel;
  sourceApp: SourceApp;
  sourceLink: string;
  updatedAt: string;
  conflicts: ConflictEntry[];
};

export type DailySummary = {
  date: string;
  keyHighlights: string[];
};

export type TodoItem = {
  id: string;
  label: string;
  due: string;
};

export type Question = {
  id: string;
  prompt: string;
  context: string;
};

export type TriageDatabase = {
  dailySummary: DailySummary;
  truths: TruthItem[];
  todos: TodoItem[];
  questions: Question[];
};

export const triageDatabase: TriageDatabase = {
  dailySummary: {
    date: "March 12, 2026",
    keyHighlights: [
      "Midterm moved to Tuesday, March 24 (verified by Prof. Nguyen).",
      "Lab 3 deadline extended to Friday, March 20 at 11:59 PM.",
      "Room change for Thursday lecture: Building C, Room 402."
    ]
  },
  truths: [
    {
      id: "truth-1",
      bucket: "Actionable",
      summary: "Midterm: Tuesday, March 24 (9:00–10:30 AM).",
      verifiedBy: "Prof. Nguyen",
      authorityLevel: 1,
      sourceApp: "Email",
      sourceLink: "https://university.edu/mail/abc123",
      updatedAt: "March 12, 2026 • 2:18 PM",
      conflicts: [
        {
          id: "conflict-1a",
          summary: "Was Monday, March 23 (announced by TA).",
          changedBy: "TA Patel",
          changedAt: "March 11, 2026 • 9:02 AM"
        }
      ]
    },
    {
      id: "truth-2",
      bucket: "Actionable",
      summary: "Lab 3 due Friday, March 20 at 11:59 PM.",
      verifiedBy: "Course Coordinator",
      authorityLevel: 1,
      sourceApp: "Telegram",
      sourceLink: "https://t.me/c/000/4321",
      updatedAt: "March 12, 2026 • 11:05 AM",
      conflicts: [
        {
          id: "conflict-2a",
          summary: "Was Wednesday, March 18 (student rep).",
          changedBy: "Class Rep Zara",
          changedAt: "March 10, 2026 • 7:45 PM"
        }
      ]
    },
    {
      id: "truth-3",
      bucket: "Resources",
      summary: "Reading list updated: Week 6 paper added (PDF link).",
      verifiedBy: "Prof. Nguyen",
      authorityLevel: 1,
      sourceApp: "Discord",
      sourceLink: "https://discord.com/channels/123/456/789",
      updatedAt: "March 12, 2026 • 9:10 AM",
      conflicts: []
    },
    {
      id: "truth-4",
      bucket: "Logistics",
      summary: "Thursday lecture moved to Building C, Room 402.",
      verifiedBy: "Lab Supervisor",
      authorityLevel: 2,
      sourceApp: "Email",
      sourceLink: "https://university.edu/mail/def456",
      updatedAt: "March 12, 2026 • 8:02 AM",
      conflicts: []
    }
  ],
  todos: [
    {
      id: "todo-1",
      label: "Confirm midterm proctoring instructions.",
      due: "Before March 20"
    },
    {
      id: "todo-2",
      label: "Submit Lab 3 on LMS.",
      due: "March 20, 11:59 PM"
    },
    {
      id: "todo-3",
      label: "Download Week 6 reading PDF.",
      due: "Before March 17"
    }
  ],
  questions: [
    {
      id: "q-1",
      prompt: "Do we still meet for discussion section this Friday?",
      context: "No official note from Professor or Coordinator yet."
    },
    {
      id: "q-2",
      prompt: "Will the midterm be in-person or hybrid?",
      context: "Only a room number is listed so far."
    }
  ]
};
