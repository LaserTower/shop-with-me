export function SeoHead({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `https://shop-with-me.ru${path}`;

  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shop With Me" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
