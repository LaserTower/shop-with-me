import { ButtonLink, Eyebrow, SectionHeading } from "../../components/site/Content.js";
import { Icon, type IconName } from "../../components/site/Icon.js";
import { SiteFooter } from "../../components/site/SiteFooter.js";
import { SiteHeader } from "../../components/site/SiteHeader.js";

const directions: {
  href: string;
  icon: IconName;
  number: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  action: string;
  className: string;
}[] = [
  {
    href: "/nutrition",
    icon: "user",
    number: "01",
    label: "Для себя",
    title: "Питание со специалистом",
    description: "Не просто считать еду, а понимать свой рацион и получать поддержку живого специалиста.",
    points: ["Дневник питания текстом и голосом", "Профиль, замеры и анализы", "Вопросы и запись на консультацию"],
    action: "Хочу питаться осознанно",
    className: "site-direction-green",
  },
  {
    href: "/specialists",
    icon: "users",
    number: "02",
    label: "Для практики",
    title: "Работа специалиста",
    description: "Данные клиентов, обращения и документы собраны в одном рабочем пространстве.",
    points: ["Карточки только ваших клиентов", "Задания и результаты анализов", "Персональная ссылка для подключения"],
    action: "Возможности для специалистов",
    className: "site-direction-dark",
  },
  {
    href: "/fridge",
    icon: "fridge",
    number: "03",
    label: "Для дома",
    title: "Умный холодильник",
    description: "Вы решаете, что готовить, а бот сверяет рецепт с запасами и собирает список недостающего.",
    points: ["Запасы из обычных сообщений", "Рецепты из имеющихся продуктов", "Список только недостающих покупок"],
    action: "Навести порядок в покупках",
    className: "site-direction-peach",
  },
];

export default function Page() {
  return (
    <div className="site-page">
      <SiteHeader variant="overview" />
      <main>
        <section className="site-hero overflow-hidden">
          <div className="site-container grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="relative z-10">
              <Eyebrow>Telegram-бот для вашей еды</Eyebrow>
              <h1 className="site-hero-title">
                Еда — в балансе.<br />Покупки — <em>по делу.</em>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#597068] sm:text-xl sm:leading-9">
                Питайтесь осознанно с помощью специалиста или выбирайте рецепты сами — а бот возьмёт на себя записи, запасы и список покупок.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ButtonLink href="#directions" variant="dark">Выбрать свой сценарий</ButtonLink>
                <a href="#about" className="site-text-link">Как устроен бот <span aria-hidden="true">↓</span></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#687b74]">
                <span className="flex items-center gap-2"><Icon name="message" className="size-[18px] text-[#e7734f]" /> Обычные сообщения</span>
                <span className="flex items-center gap-2"><Icon name="mic" className="size-[18px] text-[#e7734f]" /> Можно голосом</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
              <div className="site-hero-orbit" aria-hidden="true" />
              <div className="site-chat-card relative ml-auto w-[88%] sm:w-[82%]">
                <div className="flex items-center gap-3 border-b border-[#173f35]/8 px-5 py-4">
                  <span className="grid size-9 place-items-center rounded-xl bg-[#173f35] text-[#dff36b]"><Icon name="sparkles" className="size-5" /></span>
                  <div>
                    <p className="text-sm font-extrabold text-[#173f35]">Shop With Me</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#7d8d87]"><span className="size-1.5 rounded-full bg-[#6cab73]" /> бот в Telegram</p>
                  </div>
                </div>
                <div className="space-y-4 px-5 py-6 sm:px-6">
                  <div className="ml-auto max-w-[88%] rounded-[20px_20px_5px_20px] bg-[#173f35] px-4 py-3 text-sm leading-6 text-white">
                    Что приготовить из того, что есть дома?
                  </div>
                  <div className="max-w-[92%] rounded-[20px_20px_20px_5px] bg-[#edf1e7] px-4 py-3 text-sm leading-6 text-[#36564d]">
                    У вас есть курица, рис и овощи. Можно приготовить боул — рассказать рецепт?
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#799087]">
                    <span className="grid size-7 place-items-center rounded-full bg-[#f2d9cc] text-[#a85439]"><Icon name="mic" className="size-3.5" /></span>
                    Можно ответить текстом или голосом
                  </div>
                </div>
              </div>
              <div className="site-shopping-card absolute bottom-[-34px] left-0 w-[57%] min-w-[220px] sm:bottom-[-24px]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold tracking-[0.12em] text-[#73847d] uppercase">На сегодня</p>
                  <span className="grid size-8 place-items-center rounded-xl bg-[#dff36b] text-[#173f35]"><Icon name="basket" className="size-4" /></span>
                </div>
                <p className="mt-4 text-xl font-extrabold tracking-[-0.03em] text-[#173f35]">Список покупок</p>
                <ul className="mt-3 space-y-2.5 text-sm text-[#5a6e66]">
                  <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e7734f]" /> Авокадо</li>
                  <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e7734f]" /> Лимон</li>
                  <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e7734f]" /> Зелень</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="directions" className="scroll-mt-20 py-20 sm:py-28">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Три сценария — один сервис"
                title={<>Выберите, какая помощь<br className="hidden sm:block" /> нужна именно вам</>}
                description="У каждого сценария своя страница и своя логика. Никаких лишних функций — только то, что помогает в вашей ситуации."
              />
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {directions.map((direction) => (
                <article key={direction.href} className={`site-direction-card ${direction.className}`}>
                  <div className="flex items-center justify-between">
                    <span className="site-direction-icon"><Icon name={direction.icon} className="size-6" /></span>
                    <span className="font-mono text-xs font-bold opacity-45">{direction.number}</span>
                  </div>
                  <p className="mt-8 text-[10px] font-extrabold tracking-[0.18em] uppercase opacity-60">{direction.label}</p>
                  <h3 className="mt-3 text-[28px] leading-[1.12] font-extrabold tracking-[-0.04em]">{direction.title}</h3>
                  <p className="mt-4 min-h-[84px] text-[15px] leading-7 opacity-70">{direction.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-current/10 pt-6">
                    {direction.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-6 opacity-80">
                        <Icon name="check" className="mt-1 size-4 shrink-0" /> {point}
                      </li>
                    ))}
                  </ul>
                  <a href={direction.href} className="mt-8 flex items-center justify-between gap-4 border-t border-current/10 pt-5 text-sm font-extrabold">
                    {direction.action}<Icon name="arrow" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 pb-20 sm:pb-28">
          <div className="site-container">
            <div className="overflow-hidden rounded-[32px] bg-[#173f35] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
              <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
                <div>
                  <SectionHeading
                    light
                    eyebrow="Всё начинается с сообщения"
                    title={<>Не нужно осваивать<br />ещё одно приложение</>}
                    description="Shop With Me живёт в Telegram. Пишите так, как сказали бы человеку, — бот разбирает обычные фразы и голосовые сообщения."
                  />
                  <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                    <Icon name="mic" className="size-5 text-[#dff36b]" /> «На завтрак был омлет из двух яиц»
                  </div>
                </div>
                <ol className="space-y-7">
                  {[
                    ["01", "Расскажите о своей задаче", "Выберите помощь специалиста или самостоятельный сценарий с рецептами и покупками."],
                    ["02", "Общайтесь в привычном формате", "Текст, голос и фотографии — без сложных форм и отдельных таблиц."],
                    ["03", "Получайте полезный результат", "Запись в дневнике, структурированные данные для специалиста или список недостающих продуктов."],
                  ].map(([number, title, text]) => (
                    <li key={number} className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/10 pb-7 last:border-0 last:pb-0">
                      <span className="font-mono text-sm font-bold text-[#dff36b]">{number}</span>
                      <div><h3 className="text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="site-container">
            <div className="site-bottom-cta">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#587064] uppercase">С чего начнём?</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.045em] text-[#173f35] sm:text-4xl">Найдите свой способ проще относиться к еде и покупкам.</h2>
              </div>
              <ButtonLink href="#directions" variant="dark" className="shrink-0">К выбору сценария</ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
