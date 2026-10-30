import { BOT_URL, ButtonLink, CheckItem, Eyebrow, FeatureCard, SectionHeading } from "../../components/site/Content.js";
import { Icon } from "../../components/site/Icon.js";
import { SiteFooter } from "../../components/site/SiteFooter.js";
import { SiteHeader } from "../../components/site/SiteHeader.js";

export default function Page() {
  return (
    <div className="site-page">
      <SiteHeader variant="nutrition" />
      <main>
        <section className="overflow-hidden">
          <div className="site-container grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div>
              <Eyebrow>Питание со специалистом</Eyebrow>
              <h1 className="site-hero-title">
                Понять своё питание.<br /><em>Не остаться с этим один на один.</em>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#597068] sm:text-xl sm:leading-9">
                Записывайте еду, следите за изменениями и получайте помощь специалиста, который видит не разрозненные сообщения, а вашу полную картину.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ButtonLink href={BOT_URL} variant="dark">Открыть бота</ButtonLink>
                <a href="#features" className="site-text-link">Что умеет бот <span aria-hidden="true">↓</span></a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                <CheckItem>Без отдельного приложения</CheckItem>
                <CheckItem>Текст, голос и фото</CheckItem>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="site-nutrition-blob" aria-hidden="true" />
              <div className="site-profile-card relative mx-auto w-[88%]">
                <div className="flex items-center justify-between border-b border-[#173f35]/8 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-[#e9b79f] text-[#633f31]"><Icon name="user" className="size-5" /></span>
                    <div><p className="font-extrabold text-[#173f35]">Мой профиль</p><p className="mt-1 text-xs text-[#809089]">Данные собираются постепенно</p></div>
                  </div>
                  <span className="rounded-full bg-[#e4edce] px-3 py-1.5 text-[10px] font-extrabold text-[#496338] uppercase">В работе</span>
                </div>
                <div className="grid grid-cols-3 gap-3 px-6 py-5">
                  {[["Профиль", "Заполнен"], ["Активность", "Указана"], ["Цель", "Обсуждаем"]].map(([label, value], index) => (
                    <div key={label} className="rounded-2xl bg-[#f2f3ec] p-3">
                      <p className="text-[10px] font-bold text-[#829088] uppercase">{label}</p>
                      <p className={`mt-2 text-xs font-extrabold ${index === 2 ? "text-[#a5674e]" : "text-[#355c4d]"}`}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mx-6 rounded-2xl border border-[#173f35]/8 p-4">
                  <div className="flex items-center justify-between"><p className="text-sm font-extrabold text-[#173f35]">Сегодня в дневнике</p><Icon name="clipboard" className="size-4 text-[#789087]" /></div>
                  <div className="mt-4 space-y-3">
                    {[["Завтрак", "Омлет из двух яиц, кофе", "08:40"], ["Обед", "Курица, рис и овощи", "13:20"]].map(([meal, food, time]) => (
                      <div key={meal} className="flex items-center gap-3">
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#edf1e5] text-[#52705a]"><Icon name="check" className="size-4" /></span>
                        <div className="min-w-0 flex-1"><p className="text-xs font-extrabold text-[#37554b]">{meal}</p><p className="truncate text-[11px] text-[#809088]">{food}</p></div>
                        <span className="font-mono text-[10px] text-[#92a098]">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-5"><div className="flex items-center gap-3 rounded-2xl bg-[#173f35] px-4 py-3 text-white"><Icon name="message" className="size-5 shrink-0 text-[#dff36b]" /><p className="text-xs leading-5 text-white/80">Можно задать специалисту вопрос или записаться на консультацию</p></div></div>
              </div>
              <div className="site-floating-note absolute right-0 bottom-[-26px] w-[210px]">
                <span className="grid size-9 place-items-center rounded-xl bg-[#dff36b] text-[#173f35]"><Icon name="chart" className="size-5" /></span>
                <p className="mt-3 text-sm font-extrabold text-[#173f35]">Прогресс виден в деталях</p>
                <p className="mt-1 text-xs leading-5 text-[#71827b]">Вес, объёмы и фото — каждое изменение отдельно</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 border-y border-[#173f35]/8 bg-white/45 py-20 sm:py-28">
          <div className="site-container">
            <SectionHeading
              eyebrow="Ваш ежедневный помощник"
              title={<>Маленькие записи складываются<br className="hidden sm:block" /> в понятную картину</>}
              description="Не нужно вести строгий дневник или готовиться к каждому разговору. Бот помогает сохранить важное в моменте."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard icon="message" title="Дневник без дисциплины дневника" number="01">Напишите или надиктуйте, что съели. Бот выделит блюда и сохранит приём пищи, а фото блюда можно добавить следом.</FeatureCard>
              <FeatureCard icon="user" title="Профиль под вашу жизнь" number="02">Возраст, рост, образ жизни и тренировки — базовые данные, от которых специалист отталкивается в рекомендациях.</FeatureCard>
              <FeatureCard icon="clipboard" title="Аллергии и предпочтения" number="03">Отметьте аллергены и перечислите нелюбимые продукты своими словами. Специалист увидит их рядом с меню.</FeatureCard>
              <FeatureCard icon="chart" title="Замеры с динамикой" number="04">Вес, талия, бёдра и фото сохраняются отдельно. После каждого значения бот показывает изменение относительно прошлого замера.</FeatureCard>
              <FeatureCard icon="file" title="Анализы в одном месте" number="05">Загружайте фото, PDF или целые альбомы документов — по заданию специалиста или самостоятельно, с комментариями.</FeatureCard>
              <FeatureCard icon="calendar" title="Живое общение" number="06">Задавайте вопросы и оставляйте заявку на консультацию. Время созвона можно выбрать из предложенных специалистом вариантов.</FeatureCard>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
          <div className="site-container">
            <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
              <div>
                <SectionHeading
                  eyebrow="Как начать"
                  title={<>Три шага —<br />в своём темпе</>}
                  description="Можно начать с базового профиля, а остальное добавлять по мере необходимости. Не обязательно заполнять всё за один вечер."
                />
                <div className="mt-8 rounded-3xl border border-[#173f35]/10 bg-[#eef1e5] p-6">
                  <p className="text-sm font-extrabold text-[#173f35]">Команды, которые пригодятся</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["/profile", "/activity", "/measurements", "/analyses", "/consultation"].map((command) => <code key={command} className="rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-[#49675b]">{command}</code>)}
                  </div>
                </div>
              </div>
              <ol className="site-steps">
                <li>
                  <span className="site-step-number">01</span>
                  <div><h3>Расскажите о себе</h3><p>Заполните короткий профиль, укажите активность, аллергии и нелюбимые продукты. Это поможет учитывать ваши особенности, а не давать шаблонные советы.</p></div>
                </li>
                <li>
                  <span className="site-step-number">02</span>
                  <div><h3>Фиксируйте реальную жизнь</h3><p>Сообщайте боту, что едите, добавляйте замеры и документы. Не идеальную картину «как надо», а то, что происходит на самом деле.</p></div>
                </li>
                <li>
                  <span className="site-step-number">03</span>
                  <div><h3>Обсудите следующий шаг со специалистом</h3><p>Задайте вопрос или оставьте заявку через <code>/consultation</code>. Специалист предложит варианты времени — останется выбрать удобное.</p></div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="site-container">
            <div className="grid overflow-hidden rounded-[32px] bg-[#173f35] text-white lg:grid-cols-2">
              <div className="p-7 sm:p-12 lg:p-14">
                <Eyebrow light>Консультация начинается не с нуля</Eyebrow>
                <h2 className="text-3xl leading-[1.12] font-extrabold tracking-[-0.04em] sm:text-4xl">Больше времени на разбор — меньше на сбор информации</h2>
                <p className="mt-5 text-base leading-7 text-white/60">Питание, профиль, активность, замеры и анализы уже собраны. Специалист видит контекст и может отвечать предметно.</p>
                <ul className="mt-8 space-y-4">
                  <CheckItem light>Вы описываете запрос одним обычным сообщением</CheckItem>
                  <CheckItem light>Специалист отвечает и предлагает до трёх вариантов времени</CheckItem>
                  <CheckItem light>Вы выбираете удобный созвон прямо в Telegram</CheckItem>
                </ul>
              </div>
              <div className="flex items-center bg-[#204b3f] p-7 sm:p-12">
                <div className="w-full rounded-[26px] bg-[#f7f5ee] p-6 text-[#173f35] shadow-2xl sm:p-8">
                  <p className="text-[10px] font-extrabold tracking-[0.16em] text-[#809088] uppercase">Заявка на консультацию</p>
                  <div className="mt-5 rounded-2xl bg-[#e9eee1] p-4 text-sm leading-6">«Хочу наладить питание при ненормированном графике. Часто ужинаю поздно и не знаю, как выстроить день».</div>
                  <div className="mt-6 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[#e9b79f]"><Icon name="user" className="size-5" /></span><div><p className="text-sm font-extrabold">Ваш специалист</p><p className="text-xs text-[#809088]">предложил время созвона</p></div></div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                    {["Вт · 12:00", "Ср · 18:30", "Чт · 09:00"].map((time, index) => <span key={time} className={`rounded-xl border px-2 py-3 ${index === 1 ? "border-[#173f35] bg-[#173f35] text-white" : "border-[#173f35]/15"}`}>{time}</span>)}
                  </div>
                  <p className="mt-4 text-center text-[10px] text-[#8b9992]">Пример интерфейса согласования</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="site-container">
            <div className="site-medical-note">
              <Icon name="sparkles" className="size-6 shrink-0 text-[#527067]" />
              <p><strong>Важно:</strong> бот помогает собирать информацию и организовывать общение со специалистом. Он не ставит диагнозы и не заменяет консультацию врача.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
