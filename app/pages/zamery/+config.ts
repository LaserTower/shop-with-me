import type { Config } from "vike/types";

// HTML-only page: no client runtime, no hydration, no <script> tags in output
export const config: Config = {
  title: "Как делать замеры тела",
  description:
    "Как правильно снять мерки тела: подходящий метр, положение тела и порядок измерений.",
  clientRouting: false,
  clientHooks: false,
};
