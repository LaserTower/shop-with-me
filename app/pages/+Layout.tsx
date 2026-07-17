import "./Layout.css";

import { usePageContext } from "vike-react/usePageContext";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { urlPathname } = usePageContext();

  // Index page: no sidebar menu, content only
  if (urlPathname === "/") {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-950 text-white max-w-screen-xl mx-auto">
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/star-wars">Data Fetching</Link>
        <Link href="/test">Tailwind Examples</Link>
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sidebar"
      className="border-r border-gray-800 p-5 flex flex-shrink-0 flex-col leading-[1.8em]"
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="flex-1">
      <div
        id="page-content"
        className="p-5 pb-12 min-h-screen"
      >
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="mt-5 mb-2.5">
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
