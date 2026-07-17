import { TodoList } from "./TodoList.js";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold text-white">To-do List</h1>
      <TodoList />
    </>
  );
}
