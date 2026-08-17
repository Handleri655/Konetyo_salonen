import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://handleri655.github.io",
  base: "/Konetyo_salonen",
  trailingSlash: "never",
  integrations: [sitemap()],
  redirects: {
    "/yhteydenotto": "/yhteystiedot",
    "/in-english": "/en",
  },
});
