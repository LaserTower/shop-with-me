import { BOT_URL, ButtonLink, Eyebrow, FeatureCard, SectionHeading } from "../../components/site/Content.js";
import { Icon } from "../../components/site/Icon.js";
import { SiteFooter } from "../../components/site/SiteFooter.js";
import { SiteHeader } from "../../components/site/SiteHeader.js";

export default function Page() {
  return (
    <div className="site-page site-fridge">
      <SiteHeader />
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
                <ButtonLink href={BOT_URL} variant="dark">Открыть бота</ButtonLink>
                <a href="#how-it-works" className="site-text-link">Как устроен бот <span aria-hidden="true">↓</span></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#687b74]">
                <span className="flex items-center gap-2"><Icon name="message" className="size-[18px] text-[#e7734f]" /> Обычные сообщения</span>
                <span className="flex items-center gap-2"><Icon name="mic" className="size-[18px] text-[#e7734f]" /> Можно голосом</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[550px]">
              <div className="site-fridge-glow" aria-hidden="true" />
              <div className="relative grid grid-cols-[.85fr_1.15fr] gap-3 sm:gap-5">
                <div className="site-fridge-card">
                  <div className="flex items-center justify-between border-b border-[#173f35]/8 px-4 py-4">
                    <span className="grid size-9 place-items-center rounded-xl bg-[#173f35] text-[#dff36b]"><Icon name="fridge" className="size-5" /></span>
                    <span className="text-[9px] font-extrabold tracking-[0.12em] text-[#7e8f87] uppercase">Дома есть</span>
                  </div>
                  <ul className="space-y-4 px-4 py-5 text-xs font-bold text-[#486158] sm:text-sm">
                    {["Картофель", "Капуста", "Свёкла", "Морковь", "Лук"].map((product) => <li key={product} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#8ba367]" />{product}</li>)}
                  </ul>
                  <div className="mx-4 mb-4 rounded-xl bg-[#edf1e6] p-3 text-[10px] leading-4 text-[#72847b]">Запасы можно пополнить обычным сообщением</div>
                </div>
                <div className="site-list-card">
                  <div className="flex items-start justify-between">
                    <div><p className="text-[9px] font-extrabold tracking-[0.14em] text-[#8b887a] uppercase">Хочу приготовить</p><p className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-[#173f35] sm:text-2xl">Борщ</p></div>
                    <span className="grid size-10 place-items-center rounded-2xl bg-[#f4d8c8] text-[#9f5d43]"><Icon name="basket" className="size-5" /></span>
                  </div>
                  <div className="my-5 h-px bg-[#173f35]/8" />
                  <p className="text-xs font-extrabold text-[#173f35]">Осталось докупить</p>
                  <ul className="mt-4 space-y-3">
                    {["Говядина", "Сметана", "Томатная паста", "Лавровый лист"].map((product) => (
                      <li key={product} className="flex items-center gap-3 text-xs font-semibold text-[#5c6e66] sm:text-sm"><span className="grid size-5 place-items-center rounded-md border border-[#173f35]/15" />{product}</li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl bg-[#173f35] px-4 py-3 text-center text-[10px] font-bold text-[#dff36b] sm:text-xs">В списке — только недостающее</div>
                </div>
              </div>
              <div className="site-voice-pill absolute right-4 bottom-[-30px] flex items-center gap-2"><Icon name="mic" className="size-4 text-[#e7734f]" /><span>«Купил 2 кг картошки и творог»</span></div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-28">
          <div className="site-container">
            <SectionHeading
              eyebrow="Практично каждый день"
              title={<>Холодильник помнит.<br className="hidden sm:block" /> Вам не придётся</>}
              description="Управляйте продуктами в свободном диалоге или откройте список запасов, когда нужна точность."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard icon="sparkles" title="Рецепты из своего" number="01">Спросите «что приготовить?» — бот предложит блюда, исходя из продуктов, которые уже записаны в вашем холодильнике.</FeatureCard>
              <FeatureCard icon="basket" title="Покупки без дублей" number="02">Попросите список для борща или другого блюда. Бот сравнит рецепт с запасами и не добавит то, что уже есть дома.</FeatureCard>
              <FeatureCard icon="mic" title="Пополнение голосом" number="03">После магазина не нужно заполнять форму: перечислите покупки текстом или голосом в одном сообщении.</FeatureCard>
              <FeatureCard icon="fridge" title="Запасы под рукой" number="04">Команда /fridge_list покажет актуальное содержимое. Отдельный продукт можно отредактировать или удалить кнопкой.</FeatureCard>
              <FeatureCard icon="clipboard" title="Частичный расход" number="05">Осталось полпачки творога или 50 грамм вместо 200? Выберите «Редактировать» и опишите новое состояние своими словами.</FeatureCard>
              <FeatureCard icon="message" title="Обычные фразы" number="06">«Молоко закончилось» или «выбросил картошку» — бот поймёт, что продукт нужно убрать из запасов, без поиска по меню.</FeatureCard>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 border-y border-[#173f35]/8 bg-white/45 py-20 sm:py-28">
          <div className="site-container">
            <SectionHeading
              eyebrow="От запасов до магазина"
              title={<>Один диалог вместо<br className="hidden sm:block" /> сверки рецепта и полок</>}
              description="Бот не требует специального формата. Просто сообщайте о продуктах и планах так, как рассказали бы близким."
            />
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "message", "Сообщите о покупках", "«Купил два килограмма картошки и пачку творога» — бот выделит продукты и количество."],
                ["02", "sparkles", "Выберите блюдо", "Спросите, что приготовить из имеющегося, или попросите список для конкретного рецепта."],
                ["03", "basket", "Получите список", "Бот учтёт виртуальный холодильник и перечислит недостающие ингредиенты."],
                ["04", "fridge", "Обновляйте запасы", "После покупки расскажите об этом боту. Если продукт закончился — тоже просто напишите."],
              ].map(([number, icon, title, text]) => (
                <li key={number} className="site-fridge-step">
                  <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-[#173f35] text-[#dff36b]"><Icon name={icon as "message"} className="size-5" /></span><span className="font-mono text-xs font-bold text-[#93a199]">{number}</span></div>
                  <h3 className="mt-7 text-lg font-extrabold tracking-[-0.025em] text-[#173f35]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#697a73]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="example" className="scroll-mt-20 pb-20 sm:pb-28">
          <div className="site-container">
            <div className="grid overflow-hidden rounded-[32px] bg-[#173f35] text-white lg:grid-cols-[.9fr_1.1fr]">
              <div className="p-7 sm:p-12 lg:p-14">
                <Eyebrow light>Живой пример</Eyebrow>
                <h2 className="text-3xl leading-[1.12] font-extrabold tracking-[-0.04em] sm:text-4xl">«Что мне купить, чтобы приготовить борщ?»</h2>
                <p className="mt-5 text-base leading-7 text-white/60">Не полный список по рецепту, а только недостающее — с учётом того, что вы уже сообщили боту.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <code className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-[#dff36b]">/shopping_list</code>
                  <code className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-[#dff36b]">/fridge_list</code>
                </div>
              </div>
              <div className="bg-[#204b3f] p-7 sm:p-12">
                <div className="space-y-4">
                  <div className="ml-auto max-w-[85%] rounded-[20px_20px_5px_20px] bg-[#dff36b] px-5 py-4 text-sm leading-6 font-semibold text-[#173f35]">Что купить для борща? Капуста, свёкла и картошка у меня есть.</div>
                  <div className="max-w-[92%] rounded-[20px_20px_20px_5px] bg-white px-5 py-5 text-[#173f35]">
                    <p className="text-sm font-extrabold">Докупите для борща:</p>
                    <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#5a6f66]">
                      <li>· Говядина</li><li>· Морковь</li><li>· Лук</li><li>· Томатная паста</li><li>· Сметана</li><li>· Специи</li>
                    </ul>
                  </div>
                  <p className="text-center text-[10px] text-white/35">Пример диалога. Состав списка зависит от ваших запасов.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <SectionHeading eyebrow="Коротко о важном" title={<>Вопросы,<br />которые остаются</>} />
            <div className="site-faq">
              <details>
                <summary>Нужно ли вводить каждый продукт отдельно?<span>+</span></summary>
                <p>Нет. Перечислите всё в одном сообщении текстом или голосом — например: «купил курицу, два килограмма картошки, молоко и творог».</p>
              </details>
              <details>
                <summary>Можно выбрать конкретный рецепт?<span>+</span></summary>
                <p>Да. Напишите, какое блюдо планируете, и попросите список покупок. Бот учтёт продукты, которые уже числятся в холодильнике.</p>
              </details>
              <details>
                <summary>Что будет, если холодильник пока пуст?<span>+</span></summary>
                <p>Бот всё равно поможет: по команде /shopping_list отправит базовый список покупок «с нуля». После покупок сообщите о них, чтобы начать вести запасы.</p>
              </details>
              <details>
                <summary>Бот сам списывает продукты после готовки?<span>+</span></summary>
                <p>Нет. Расскажите, что закончилось или было выброшено, а остаток можно изменить через редактирование. Чем актуальнее холодильник, тем точнее рецепты и список покупок.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="site-container">
            <div className="site-bottom-cta">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#587064] uppercase">Для специалистов</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.045em] text-[#173f35] sm:text-4xl">Работаете с клиентами по питанию?</h2>
              </div>
              <ButtonLink href="/specialists" variant="dark" className="shrink-0">Страница для специалистов</ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showSpecialists={false} />
    </div>
  );
}
