import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon.js";

export const BOT_URL = "https://t.me/MeelPlansBot";

export function ButtonLink({ href, children, variant = "dark", className = "" }: { href: string; children: ReactNode; variant?: "dark" | "lime" | "outline" | "light"; className?: string }) {
  const external = href.startsWith("https://");

  return (
    <a href={href} className={`site-button site-button-${variant} group ${className}`} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {children}
      <Icon name="arrow" className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-2.5 text-[11px] font-extrabold tracking-[0.18em] uppercase ${light ? "text-[#dff36b]" : "text-[#527067]"}`}>
      <span className={`h-2 w-2 rounded-full ${light ? "bg-[#dff36b]" : "bg-[#e7734f]"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: ReactNode; description?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`site-section-title ${light ? "text-white" : "text-[#173f35]"}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-white/60" : "text-[#5c706a]"}`}>{description}</p>}
    </div>
  );
}

export function FeatureCard({ icon, title, children, number }: { icon: IconName; title: string; children: ReactNode; number?: string }) {
  return (
    <article className="site-feature-card">
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-2xl bg-[#e9efdf] text-[#285b49]">
          <Icon name={icon} className="size-[22px]" />
        </span>
        {number && <span className="font-mono text-xs font-bold text-[#8b9b95]">{number}</span>}
      </div>
      <h3 className="mt-7 text-xl font-extrabold tracking-[-0.025em] text-[#173f35]">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-[#62736d]">{children}</p>
    </article>
  );
}

export function CheckItem({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-[15px] leading-6 ${light ? "text-white/75" : "text-[#536a62]"}`}>
      <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${light ? "bg-[#dff36b] text-[#173f35]" : "bg-[#dfe9d5] text-[#285b49]"}`}>
        <Icon name="check" className="size-3.5" />
      </span>
      {children}
    </li>
  );
}
