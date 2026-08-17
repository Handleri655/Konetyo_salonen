/** Prefix internal paths with the GitHub Pages base. */
export function withBase(href = "/") {
  if (/^(https?:|tel:|mailto:|#)/i.test(href)) return href;
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  const path = href.replace(/^\//, "");
  if (!path) return base || "/";
  return `${base}/${path}`;
}

export function currentPath(pathname: string) {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return stripped.replace(/\/$/, "") || "/";
}
