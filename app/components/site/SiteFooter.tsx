import { Logo } from "./Logo.js";

export function SiteFooter({ specialists = false }: { specialists?: boolean }) {
  return (
    <footer className="bg-[#102e27] text-white">
      <div className="site-container py-10 sm:py-12">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-9 sm:flex-row sm:items-end">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              Еда, план питания и покупки — в понятном диалоге в Telegram.
            </p>
          </div>
          {!specialists && (
            <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/75" aria-label="Направления проекта">
              <a href="/nutrition" className="hover:text-[#dff36b]">Питание со специалистом</a>
              <a href="/specialists" className="hover:text-[#dff36b]">Специалистам</a>
              <a href="/fridge" className="hover:text-[#dff36b]">Холодильник</a>
            </nav>
          )}
          {specialists && (
            <nav className="flex gap-7 text-sm font-semibold text-white/75" aria-label="Навигация для специалистов">
              <a href="#features" className="hover:text-[#dff36b]">Возможности</a>
              <a href="#start" className="hover:text-[#dff36b]">Подключение</a>
            </nav>
          )}
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shop With Me</p>
          <p>Простые привычки. Понятные данные. Меньше лишних покупок.</p>
        </div>
      </div>
    </footer>
  );
}
