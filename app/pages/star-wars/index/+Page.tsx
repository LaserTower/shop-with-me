import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";

export default function Page() {
  const { movies } = useData<Data>();
  return (
    <>
      <h1 className="text-2xl font-bold text-white">Star Wars Movies</h1>
      <ol className="list-decimal pl-5 mt-4 space-y-1 text-gray-300">
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <a href={`/star-wars/${id}`} className="text-blue-400 hover:text-blue-300 underline">{title}</a> ({release_date})
          </li>
        ))}
      </ol>
      <p className="mt-4 text-gray-400">
        Source: <a href="https://brillout.github.io/star-wars" className="text-blue-400 hover:text-blue-300 underline">brillout.github.io/star-wars</a>.
      </p>
    </>
  );
}
