// https://vike.dev/Head

const url = "https://shop-with-me.ru/zamery/";
const title = "Как делать замеры тела";
const image = "https://shop-with-me.ru/zamery/step-1.jpg";

export function Head() {
  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Shop With Me" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="460" />
      <meta property="og:image:height" content="345" />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Как правильно снять мерки тела: подходящий метр, положение тела и порядок измерений." />
      <meta name="twitter:image" content={image} />
    </>
  );
}
