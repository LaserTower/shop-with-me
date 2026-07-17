import type { Data } from "./+data";
import { useState } from "react";
import { useData } from "vike-react/useData";

export function TodoList() {
  const { todoItemsInitial } = useData<Data>();
  const [todoItems, setTodoItems] = useState<{ text: string }[]>(todoItemsInitial);
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <ul className="list-disc pl-5 space-y-1 text-white">
        {todoItems.map((todoItem, index) => (
          <li key={index} className="py-1">{todoItem.text}</li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();

            const text = newTodo;
            setTodoItems((prev) => [...prev, { text }]);
            setNewTodo("");
          }}
        >
          <input
            type="text"
            aria-label="New to-do"
            onChange={(ev) => setNewTodo(ev.target.value)}
            value={newTodo}
            className="flex-1 rounded-l-lg border border-gray-700 px-4 py-2 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <button
            type="submit"
            className="rounded-r-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Add to-do
          </button>
        </form>
      </div>
    </>
  );
}
