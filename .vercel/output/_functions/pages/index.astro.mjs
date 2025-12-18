import { c as createAstro, a as createComponent } from '../chunks/astro/server_CpqH38Fn.mjs';
import 'piccolore';
import 'clsx';
import { d as defaultLang } from '../chunks/ui_CfTu7mVZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mysite.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const redirectPath = `/${defaultLang}/` ;
  return Astro2.redirect(redirectPath);
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
