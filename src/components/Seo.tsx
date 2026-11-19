import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, pageFor } from "@/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string | null) {
  const selector = `meta[${attr}="${key}"][data-seo]`;
  const current = document.head.querySelector(selector);
  if (!content) {
    current?.remove();
    return;
  }
  const el = current ?? document.createElement("meta");
  el.setAttribute(attr, key);
  el.setAttribute("data-seo", "");
  el.setAttribute("content", content);
  if (!current) document.head.appendChild(el);
}

/** Keeps the document head in sync after a client-side navigation. */
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageFor(pathname);
    const url = canonicalUrl(page);
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "robots", page.index ? "index, follow" : "noindex, nofollow");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    const current = document.head.querySelector('link[rel="canonical"][data-seo]');
    if (!url) {
      current?.remove();
      return;
    }
    const link = current ?? document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("data-seo", "");
    link.setAttribute("href", url);
    if (!current) document.head.appendChild(link);
  }, [pathname]);
  return null;
}
