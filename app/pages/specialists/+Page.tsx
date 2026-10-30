import { CheckItem, Eyebrow, FeatureCard, SectionHeading } from "../../components/site/Content.js";
import { Icon } from "../../components/site/Icon.js";
import { SiteFooter } from "../../components/site/SiteFooter.js";
import { SiteHeader } from "../../components/site/SiteHeader.js";

export default function Page() {
  return (
    <div className="site-page site-specialists">
      <SiteHeader variant="specialists" />
      <main>
        <section className="overflow-hidden">
          <div className="site-container grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[.95fr_1.05fr] lg:py-24">
            <div>
              <Eyebrow>Кабинет специалиста</Eyebrow>
              <h1 className="site-hero-title">
                Видеть клиента<br />в контексте.<br /><em>Работать по существу.</em>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#597068] sm:text-xl sm:leading-9">
                Питание, замеры, анализы, вопросы и заявки — в одном рабочем пространстве. Меньше ручного сбора информации, больше времени на ваши рекомендации.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#start" className="site-button site-button-dark">Как подключиться <Icon name="arrow" className="size-[18px]" /></a>
                <a href="#features" className="site-text-link">Обзор кабинета <span aria-hidden="true">↓</span></a>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#647a71]">
                <span className="grid size-9 place-items-center rounded-xl bg-[#e5ebdc] text-[#426453]"><Icon name="lock" className="size-[18px]" /></span>
                Только ваши клиенты и разрешённые данные
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[590px]">
              <div className="site-dashboard-glow" aria-hidden="true" />
              <div className="site-dashboard relative">
                <div className="flex items-center justify-between border-b border-[#173f35]/8 px-5 py-4 sm:px-7">
                  <div><p className="text-[10px] font-extrabold tracking-[0.16em] text-[#82928b] uppercase">Рабочий стол</p><p className="mt-1 text-lg font-extrabold text-[#173f35]">Мои клиенты</p></div>
                  <span className="grid size-10 place-items-center rounded-full bg-[#173f35] text-xs font-extrabold text-white">АС</span>
                </div>
                <div className="space-y-3 p-4 sm:p-6">
                  <div className="rounded-2xl border border-[#173f35]/8 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full bg-[#e8b9a3] text-sm font-extrabold text-[#694638]">АК</span>
                      <div className="flex-1"><p className="text-sm font-extrabold text-[#25473d]">Анна К.</p><p className="mt-0.5 text-[11px] text-[#8a9892]">Профиль · 4 активных события</p></div>
                      <span className="size-2 rounded-full bg-[#e7734f]" />
                    </div>
                    <div className="mt-4 space-y-2 border-t border-[#173f35]/7 pt-3">
                      <div className="flex items-center gap-2 text-xs text-[#62756d]"><Icon name="message" className="size-4 text-[#d87858]" /><span className="font-bold">Вопрос</span><span className="truncate text-[#87958f]">Как скорректировать ужин при поздней тренировке?</span></div>
                      <div className="flex items-center gap-2 text-xs text-[#62756d]"><Icon name="file" className="size-4 text-[#668778]" /><span className="font-bold">Анализ ожидает просмотра</span><span className="ml-auto rounded-md bg-[#e6eddb] px-2 py-1 text-[9px] font-extrabold text-[#4e6955] uppercase">Новый</span></div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#173f35]/8 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full bg-[#cbdccf] text-sm font-extrabold text-[#365c4c]">МС</span>
                      <div className="flex-1"><p className="text-sm font-extrabold text-[#25473d]">Михаил С.</p><p className="mt-0.5 text-[11px] text-[#8a9892]">Профиль · 1 активное событие</p></div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-[#173f35]/7 pt-3 text-xs text-[#62756d]"><Icon name="calendar" className="size-4 text-[#668778]" /><span className="font-bold">Заявка на консультацию</span><span className="ml-auto text-[10px] text-[#87958f]">Ждём выбора</span></div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-[#173f35] px-5 py-4 text-white">
                    <div className="flex items-center gap-3"><Icon name="link" className="size-5 text-[#dff36b]" /><div><p className="text-xs font-extrabold">Моя ссылка для клиентов</p><p className="mt-1 text-[10px] text-white/45">Автоматическая привязка после запуска бота</p></div></div>
                    <Icon name="arrow" className="size-4 text-white/50" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-[11px] text-[#8a9992]">Пример рабочего списка специалиста</p>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 border-y border-[#173f35]/8 bg-white/45 py-20 sm:py-28">
          <div className="site-container">
            <SectionHeading
              eyebrow="Рабочие инструменты"
              title={<>Всё, что требует внимания,<br className="hidden sm:block" /> не теряется между чатами</>}
              description="Главная страница собирает активные события ваших клиентов. Из каждой строки можно сразу перейти к нужному разделу карточки."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard icon="users" title="Единый список клиентов" number="01">Вопросы, желания, заявки на консультацию и новые анализы видны под именем клиента. Не нужно открывать каждую карточку в поисках обновлений.</FeatureCard>
              <FeatureCard icon="clipboard" title="Анкета с реальными данными" number="02">Профиль, питание, предпочтения, аллергии, образ жизни и тренировки собираются через бота и доступны вам в структурированном виде.</FeatureCard>
              <FeatureCard icon="file" title="Анализы по вашему каталогу" number="03">Создавайте собственный список анализов, назначайте их пачками, получайте файлы и комментарии клиента, отмечайте результаты просмотренными.</FeatureCard>
              <FeatureCard icon="chart" title="История замеров" number="04">Вес, объёмы и фотографии сохраняются отдельными записями. Динамику можно оценивать по каждому параметру, а не только по весу.</FeatureCard>
              <FeatureCard icon="message" title="Вопросы с историей" number="05">Отвечайте на обращения из карточки клиента. Активные вопросы остаются в фокусе, а вся переписка сохраняется в истории.</FeatureCard>
              <FeatureCard icon="calendar" title="Согласование созвонов" number="06">Ответьте на заявку и предложите от одного до трёх вариантов времени. Результат выбора клиента придёт вам в Telegram.</FeatureCard>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Документы без хаоса"
                title={<>От назначения анализа<br />до результата — один маршрут</>}
                description="У каждого специалиста свой каталог и своя практика. Клиент получает понятное задание в Telegram, а вы — структурированный результат в карточке."
              />
              <ul className="mt-8 space-y-4">
                <CheckItem>Выберите несколько анализов и создайте одно задание</CheckItem>
                <CheckItem>Клиент прикрепляет фото, PDF или альбом с комментарием</CheckItem>
                <CheckItem>Новый результат появляется на главной и в карточке</CheckItem>
                <CheckItem>Вы сами решаете, когда задание действительно выполнено</CheckItem>
              </ul>
            </div>
            <div className="site-analysis-card">
              <div className="flex items-center justify-between">
                <div><p className="text-[10px] font-extrabold tracking-[0.14em] text-[#85958e] uppercase">Задание клиенту</p><h3 className="mt-2 text-xl font-extrabold text-[#173f35]">Базовые анализы</h3></div>
                <span className="grid size-11 place-items-center rounded-2xl bg-[#e5ecd8] text-[#4d6d55]"><Icon name="file" className="size-5" /></span>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  ["Общий анализ крови", "3 файла", true],
                  ["Ферритин", "1 PDF", true],
                  ["Витамин D", "Ожидается", false],
                ].map(([name, status, done]) => (
                  <div key={String(name)} className="flex items-center gap-3 rounded-2xl border border-[#173f35]/8 bg-white/75 p-4">
                    <span className={`grid size-8 place-items-center rounded-full ${done ? "bg-[#dfeacc] text-[#426044]" : "bg-[#f0e5d8] text-[#a27252]"}`}><Icon name={done ? "check" : "file"} className="size-4" /></span>
                    <p className="flex-1 text-sm font-bold text-[#3c594e]">{name}</p>
                    <span className="text-[11px] text-[#87968f]">{status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#7c8d85]"><Icon name="message" className="size-4" /> Комментарий клиента хранится вместе с результатом</div>
            </div>
          </div>
        </section>

        <section id="start" className="scroll-mt-20 pb-20 sm:pb-28">
          <div className="site-container">
            <div className="rounded-[32px] bg-[#173f35] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
              <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
                <div>
                  <SectionHeading
                    light
                    eyebrow="Подключение"
                    title={<>Приведите клиента<br />одной ссылкой</>}
                    description="После запуска бота по вашей персональной ссылке клиент автоматически появляется в вашем списке. Ручная привязка администратором не нужна."
                  />
                  <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/60"><Icon name="lock" className="mt-0.5 size-5 shrink-0 text-[#dff36b]" /> Доступ к карточкам и уведомлениям определяется привязкой клиента и разрешениями вашей роли.</div>
                </div>
                <ol className="space-y-6">
                  {[
                    ["01", "Получите доступ к кабинету", "Администратор проекта создаёт аккаунт специалиста и настраивает необходимые разрешения."],
                    ["02", "Скопируйте персональную ссылку", "Кнопка «Моя ссылка для клиентов» находится на главной странице кабинета. Ссылка постоянная и уникальная."],
                    ["03", "Отправьте её клиенту", "Клиент запускает бота и продолжает обычное знакомство. Вы сразу получаете доступ к его рабочей карточке."],
                  ].map(([number, title, text]) => (
                    <li key={number} className="grid grid-cols-[40px_1fr] gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <span className="font-mono text-sm font-bold text-[#dff36b]">{number}</span>
                      <div><h3 className="text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter specialists />
    </div>
  );
}
