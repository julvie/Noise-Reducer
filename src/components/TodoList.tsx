"use client";

import { useMemo, useState } from "react";

type TodoItem = {
  id: string;
  label: string;
  due: string;
};

type TodoListProps = {
  items: TodoItem[];
};

export default function TodoList({ items }: TodoListProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const remainingCount = useMemo(
    () => items.filter((item) => !checked[item.id]).length,
    [items, checked]
  );

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">To-Do</p>
          <h3 className="panel-title">Student Action List</h3>
        </div>
        <div className="badge">{remainingCount} open</div>
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
                <p className="todo-due">Due: {item.due}</p>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
