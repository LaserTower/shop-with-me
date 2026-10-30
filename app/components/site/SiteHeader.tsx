import { BOT_URL } from "./Content.js";
import { Icon } from "./Icon.js";
import { Logo } from "./Logo.js";

type HeaderVariant = "main" | "nutrition" | "specialists" | "fridge";

const navigation: Record<HeaderVariant, { href: string; label: string }[]> = {
  main: [
    { href: "#features", label: "Возможности" },
    { href: "#how-it-works", label: "Как это работает" },
    { href: "/nutrition", label: "Со специалистом" },
  ],
  nutrition: [
    { href: "#features", label: "Возможности" },
    { href: "#how-it-works", label: "Как это работает" },
  ],
  specialists: [
    { href: "#features", label: "Возможности" },
    { href: "#start", label: "Как подключиться" },
  ],
  fridge: [
    { href: "#features", label: "Возможности" },
    { href: "#how-it-works", label: "Как это работает" },
  ],
};

export function SiteHeader({ variant = "main" }: { variant?: HeaderVariant }) {
  const botLink = variant === "main" || variant === "nutrition" || variant === "fridge";
  const actionHref = botLink ? BOT_URL : "#start";

  return (
    <header className="relative z-20 border-b border-[#173f35]/10">
      <div className="site-container flex h-[84px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navigation[variant].map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={actionHref} className="site-header-action" target={botLink ? "_blank" : undefined} rel={botLink ? "noopener noreferrer" : undefined}>
          <span>{variant === "specialists" ? "Подключиться" : "Открыть бота"}</span>
          <Icon name="arrow" className="size-4" />
        </a>
      </div>
    </header>
  );
}
