"use client";

import { useMemo, useState } from "react";

type TodoItem = {
  id: string;
  label: string;
  due: string;
  className: string;
  link: string;
};

type ClassroomTodoProps = {
  items: TodoItem[];
};

export default function ClassroomTodo({ items }: ClassroomTodoProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const remainingCount = useMemo(
    () => items.filter((item) => !checked[item.id]).length,
    [items, checked]
  );

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Section 2</p>
          <h3 className="panel-title">Google Classroom To-Do</h3>
          <p className="panel-subtitle">
            Homework and deadlines extracted into a checklist.
          </p>
        </div>
        <div className="badge">{remainingCount} open</div>
      </div>
      <div className="classroom-link">
        <a className="button ghost" href="https://classroom.google.com" target="_blank">
          Connect Google Classroom
        </a>
      </div>
      <div className="todo-list">
        {items.map((item) => {
          const isDone = Boolean(checked[item.id]);
          return (
            <label key={item.id} className={`todo-item ${isDone ? "done" : ""}`}>
              <input
                type="checkbox"
                checked={isDone}
                onChange={() =>
                  setChecked((prev) => ({ ...prev, [item.id]: !isDone }))
                }
              />
              <div>
                <p className="todo-label">{item.label}</p>
                <p className="todo-due">
                  {item.className} • Due: {item.due}
                </p>
                <a className="todo-link" href={item.link} target="_blank">
                  View in Classroom
                </a>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
