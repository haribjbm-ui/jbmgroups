import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

const SITE = "https://jbmgroups.in";
const SUFFIX = "JBM Groups - Prosperity & Strength";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, keywords, path = "/" }: SEOOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SUFFIX}`;
    document.title = fullTitle;

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${SITE}${path}`, "property");

    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    setLink("canonical", `${SITE}${path}`);

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description, keywords, path]);
}
