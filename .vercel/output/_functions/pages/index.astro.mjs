import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_B5s_srhx.mjs';
import 'piccolore';
import { $ as $$Index$1 } from '../chunks/index_Bfu6ogaJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://hugoceniceros.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.params.lang = "es";
  return renderTemplate`${renderComponent($$result, "Page", $$Index$1, {})}`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
