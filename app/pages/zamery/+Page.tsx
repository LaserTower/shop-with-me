import { article } from "./article.js";

export default function Page() {
  return (
    <main
      className="max-w-2xl mx-auto px-4 py-10"
      itemScope
      itemType="https://schema.org/Article"
    >
      <meta itemProp="url" content="https://shop-with-me.ru/zamery/" />
      <meta itemProp="mainEntityOfPage" content="https://shop-with-me.ru/zamery/" />
      <meta itemProp="inLanguage" content="ru" />
      <meta itemProp="image" content="https://shop-with-me.ru/zamery/step-1.jpg" />
      <meta itemProp="datePublished" content="2026-09-24" />
      <meta itemProp="dateModified" content="2026-09-24" />
      <span itemProp="author" itemScope itemType="https://schema.org/Organization" hidden>
        <meta itemProp="name" content="Shop With Me" />
        <meta itemProp="url" content="https://shop-with-me.ru/" />
      </span>
      <span itemProp="publisher" itemScope itemType="https://schema.org/Organization" hidden>
        <meta itemProp="name" content="Shop With Me" />
        <meta itemProp="url" content="https://shop-with-me.ru/" />
      </span>
      <div className="mb-8 p-4 border border-amber-400 bg-amber-50 text-amber-900 text-sm rounded">
        <strong>Черновик.</strong> Эта страница — временный пример оформления и
        подлежит полной переработке перед публикацией. Текст и изображения взяты
        с сайта wikiHow (ru.wikihow.com) исключительно в ознакомительных целях:
        текст распространяется по лицензии CC BY-NC-SA 3.0, права на изображения
        принадлежат wikiHow, Inc. Любое публичное использование этих материалов
        без соответствующих прав не допускается.
      </div>
      <h1 itemProp="headline" className="text-3xl font-bold mb-6 text-center">
        Как делать замеры тела
      </h1>
      <p itemProp="description" className="mb-10">
        {article.intro}
      </p>

      {article.methods.map((method) => (
        <section
          key={method.title}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-4">{method.title}</h2>
          <ol className="list-decimal list-outside ml-6 space-y-8">
            {method.steps.map((step) => (
              <li
                key={step.title}
              >
                <strong>{step.title}</strong>{" "}
                {step.text}
                {step.subs && (
                  <ul className="list-disc list-outside ml-6 mt-2 space-y-1">
                    {step.subs.map((sub) => (
                      <li key={sub.slice(0, 40)}>{sub}</li>
                    ))}
                  </ul>
                )}
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="block mx-auto mt-4"
                    width={460}
                    height={345}
                  />
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}

      {article.extras.map((extra) => (
        <section key={extra.title} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{extra.title}</h2>
          <ul className="list-disc list-outside ml-6 space-y-2">
            {extra.items.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <footer className="mt-12 pt-4 border-t border-gray-300 text-sm text-gray-500 text-center">
        Источник:{" "}
        <a
          href="https://ru.wikihow.com/%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%B7%D0%B0%D0%BC%D0%B5%D1%80%D1%8B-%D1%82%D0%B5%D0%BB%D0%B0"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          wikiHow — Как делать замеры тела
        </a>
        . Текст распространяется по лицензии{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.ru"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-NC-SA 3.0
        </a>
        .
      </footer>
    </main>
  );
}
