import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-gray-400 mt-2">This page could not be found.</p>
      </>
    );
  }
  return (
    <>
      <h1 className="text-2xl font-bold text-white">Internal Error</h1>
      <p className="text-gray-400 mt-2">Something went wrong.</p>
    </>
  );
}
