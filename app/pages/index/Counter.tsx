import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 cursor-pointer"
      onClick={() => setCount((count) => count + 1)}
    >
      Counter {count}
    </button>
  );
}
