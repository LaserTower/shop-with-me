import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "Shop With Me — питание и покупки в Telegram",
  description: "Помощь специалиста с питанием или самостоятельный выбор рецептов: бот учитывает запасы и собирает список покупок.",
  lang: "ru",

  extends: [vikeReact],
  prerender: true,
};

export default config;
