export type DailySummary = {
  date: string;
  keyHighlights: string[];
};

export type WhatsAppConnection = {
  connected: boolean;
  accountLabel: string;
  lastSync: string;
};

export type TodoItem = {
  id: string;
  label: string;
  due: string;
  className: string;
  link: string;
};

export type Question = {
  id: string;
  prompt: string;
  context: string;
};

export type TriageDatabase = {
  dateOptions: string[];
  dailySummary: DailySummary;
  whatsapp: WhatsAppConnection;
  todos: TodoItem[];
  questions: Question[];
};

export const triageDatabase: TriageDatabase = {
  dateOptions: [
    "March 8, 2026",
    "March 9, 2026",
    "March 10, 2026",
    "March 11, 2026",
    "March 12, 2026"
  ],
  dailySummary: {
    date: "March 12, 2026",
    keyHighlights: [
      "Lecture recap shared by Prof. Nguyen with emphasis on Bayesian priors.",
      "Lab 3 deadline extended to Friday, March 20 at 11:59 PM.",
      "TA posted a reminder to bring lab notebooks to Thursday section."
    ]
  },
  whatsapp: {
    connected: false,
    accountLabel: "No account connected",
    lastSync: "Not synced yet"
  },
  todos: [
    {
      id: "todo-1",
      label: "Submit Lab 3 on LMS.",
      due: "March 20, 11:59 PM",
      className: "STAT 210",
      link: "https://classroom.google.com/u/0/"
    },
    {
      id: "todo-2",
      label: "Watch Week 6 lecture recording.",
      due: "March 17, 9:00 AM",
      className: "STAT 210",
      link: "https://classroom.google.com/u/0/"
    },
    {
      id: "todo-3",
      label: "Group project outline draft.",
      due: "March 22, 5:00 PM",
      className: "HCI 310",
      link: "https://classroom.google.com/u/0/"
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
