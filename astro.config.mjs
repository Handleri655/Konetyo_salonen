import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const onVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  site: onVercel && vercelHost
    ? (vercelHost.startsWith("http") ? vercelHost : `https://${vercelHost}`)
    : "https://handleri655.github.io",
  base: onVercel ? "/" : "/Konetyo_salonen",
  trailingSlash: "never",
  integrations: [sitemap()],
  redirects: {
    "/yhteydenotto": "/yhteystiedot",
    "/in-english": "/en",
  },
});
