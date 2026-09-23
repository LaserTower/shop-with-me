import type { Config } from "vike/types";

// HTML-only page: no client runtime, no hydration, no <script> tags in output
export const config: Config = {
  title: "Как делать замеры тела",
  clientRouting: false,
  clientHooks: false,
};
