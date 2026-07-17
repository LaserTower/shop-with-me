import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";

export default function Page() {
  const { movie } = useData<Data>();
  return (
    <>
      <h1 className="text-2xl font-bold text-white">{movie.title}</h1>
      <div className="text-gray-300 mt-4 space-y-1">
        <p>Release Date: {movie.release_date}</p>
        <p>Director: {movie.director}</p>
        <p>Producer: {movie.producer}</p>
      </div>
    </>
  );
}
