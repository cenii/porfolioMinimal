import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment, e as renderSlot, f as renderHead } from '../chunks/astro/server_Dz2Mg84L.mjs';
import 'piccolore';
/* empty css                                 */
import { u as ui, d as defaultLang, l as languages } from '../chunks/ui_CfTu7mVZ.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_BcLPAAwV.mjs';
export { renderers } from '../renderers.mjs';

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return `/${l}${path}`;
  };
}

const $$Astro$b = createAstro();
const $$LenguageToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LenguageToggle;
  const currentLang = getLangFromUrl(Astro2.url) ?? "";
  const translatePath = useTranslatedPath(currentLang);
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-end"> <span class="flex flex-row max-w-min rounded-full bg-background-icons p-1 gap-1 "> ${Object.entries(languages).map(([lang, label]) => renderTemplate`<a${addAttribute(`px-2 rounded-full font-body font-medium transition-all duration-800 ease-in-out text-sm ${currentLang === lang ? "bg-background-primary text-text-subtitle shadow-md" : "bg-transparent text-text-subtitle hover:bg-background-focus hover:text-text-subtitle"}`, "class")}${addAttribute(translatePath("/", lang), "href")}> ${label} </a>`)} </span> </div>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/molecules/lenguageToggle.astro", void 0);

const $$Astro$a = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-4"> <div> ${renderComponent($$result, "LenguageToggle", $$LenguageToggle, {})} </div> <div class="justify-items-center md:flex md:flex-row-reverse md:justify-between"> ${renderComponent($$result, "Image", $$Image, { "src": "/avatar.png", "alt": "Avatar", "width": 120, "height": 120, "loading": "eager", "class": "" })} <div class="text-center flex flex-col gap-2 md:text-start"> <div> <h1 class="font-titles font-bold color-text-title text-3xl"> ${t("hero.nombre")} </h1> <h2 class="font-titles text-text-subtitle"> ${t("hero.subtitle")} </h2> <span class="flex flex-row justify-center items-center gap-2 font-body text-text-body md:justify-start"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:world", "width": "20", "height": "20", "inline": true })} ${t("hero.location")} </span> </div> <div class="flex gap-4 justify-center md:justify-start"> <a href="/Curriculum_Hugo_Ceniceros.pdf" class="flex items-center gap-2 border border-text-subtitle px-2 py-2 rounded-lg hover:bg-background-icons" download="/Curriculum_Hugo_Ceniceros.pdf"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-text-subtitle", "icon": "mdi:file-document-outline", "width": "20", "height": "20", "inline": true })} <span class="sr-only">${t("hero.link.cv")}</span> </a> <a href="https://github.com/cenii"${addAttribute(t("hero.link.github"), "aria-label")} class="flex items-center gap-2 border border-icons px-2 py-2 rounded-lg hover:bg-background-icons" target="_blank"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-text-subtitle", "icon": "mdi:github", "width": "20", "height": "20", "inline": true })} </a> <a href="https://www.linkedin.com/in/HugoCenicerosOlave"${addAttribute(t("hero.link.linkedin"), "aria-label")} class="flex items-center gap-2 border border-icons px-2 py-2 rounded-lg hover:bg-background-icons" target="_blank"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-text-subtitle", "icon": "mdi:linkedin", "width": "20", "height": "20", "inline": true })} </a> </div> </div> </div> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/Hero.astro", void 0);

const $$Astro$9 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("about.title")}</h2> <p class="font-body text-text-body">${t("about.description")}</p> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/About.astro", void 0);

const $$Astro$8 = createAstro();
const $$HaederJobs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HaederJobs;
  const { company, job, from, to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between"> <div class="flex flex-col gap-1"> <h3 class="text-[18px] font-medium">${company}</h3> <span class="">${job}</span> </div> <time class="text-right font-body text-text-body text-[14px]">${from} - ${to}</time> </header>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/molecules/haederJobs.astro", void 0);

const $$Astro$7 = createAstro();
const $$Jobs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Jobs;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("jobs.title")}</h2> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HaederJobs", $$HaederJobs, { "company": "Globant", "job": "Front-End Developer", "from": "02/2025", "to": "06/2025" })} <p class="font-body text-text-body">${t("jobs.globant.description")}</p> </article> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HaederJobs", $$HaederJobs, { "company": "Tech Solutions", "job": "Desarrollador Fullstack", "from": "01/2023", "to": "12/2024" })} <p class="font-body text-text-body">${t("jobs.techsolutions.description")}</p> </article> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/Jobs.astro", void 0);

const $$Astro$6 = createAstro();
const $$HeaderEducation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderEducation;
  const { name, from, to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between"> <div class="flex flex-col gap-1"> <h3 class="text-[18px] font-medium">${name}</h3> </div> <time class="text-right font-body text-text-body text-[14px]">${from} - ${to}</time> </header>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/molecules/headerEducation.astro", void 0);

const $$Astro$5 = createAstro();
const $$Education = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Education;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("education.title")}</h2> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HeaderEducation", $$HeaderEducation, { "name": "IES Comercio", "from": "09/2020", "to": "06/2024" })} <p class="font-body text-text-body">${t("education.description_1")}</p> </article> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HeaderEducation", $$HeaderEducation, { "name": "IES Comercio", "from": "01/2022", "to": "12/2022" })} <p class="font-body text-text-body">${t("education.description_2")}</p> </article> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/Education.astro", void 0);

const $$Astro$4 = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Project;
  const { title, definition, names } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col gap-2 md:items-center md:p-2 md:border md:border-background-icons md:rounded-lg md:h-min"> <h3 class="text-[18px] font-medium md:text-center">${title}</h3> <p class="font-body text-text-body text-[14px]">${definition}</p> <div class="flex flex-wrap gap-2"> ${names && names.length > 0 ? names.map((name) => renderTemplate`<span class="font-body text-text-subtitle bg-background-icons text-[12px] px-2 py-1 rounded-lg"> ${name} </span>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} </div> </article>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/molecules/project.astro", void 0);

const $$Astro$3 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl"> ${t("projects.title")} </h2> <div class="flex flex-col gap-4 md:grid md:grid-cols-2"> <div class="md:flex md:flex-col md:gap-4"> ${renderComponent($$result, "Project", $$Project, { "title": t("project.tasks_app.title"), "definition": t("project.tasks_app.description"), "names": [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript"
  ] })} ${renderComponent($$result, "Project", $$Project, { "title": t("project.portfolio.title"), "definition": t("project.portfolio.description") })} </div> <div class="md:flex md:flex-col md:gap-4"> ${renderComponent($$result, "Project", $$Project, { "title": t("project.portfolio.title"), "definition": t("project.portfolio.description") })} ${renderComponent($$result, "Project", $$Project, { "title": t("project.portfolio.title"), "definition": t("project.portfolio.description") })} ${renderComponent($$result, "Project", $$Project, { "title": t("project.portfolio.title"), "definition": t("project.portfolio.description") })} </div> </div> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$Habilitie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Habilitie;
  const { name, icoName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="font-body text-text-title bg-background-icons text-[14px] px-2 py-1 rounded-lg flex items-center gap-2"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": `mdi:${icoName}`, "width": "16", "height": "16", "inline": true })} <span class="relative top-0.5">${name}</span> </div>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/molecules/habilitie.astro", void 0);

const $$Astro$1 = createAstro();
const $$Habilities = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Habilities;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("skills.title")}</h2> <div class="flex flex-wrap gap-2"> ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "JavaScript", "icoName": "language-javascript" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "TypeScript", "icoName": "language-typescript" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "React", "icoName": "react" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "Node.js", "icoName": "nodejs" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "MongoDB", "icoName": "database" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "HTML5", "icoName": "language-html5" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "CSS3", "icoName": "language-css3" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "Tailwind CSS", "icoName": "tailwind" })} </div> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/components/Habilities.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="icon/ico" href="/favicon.ico"><meta name="generator"', '><title>\n			Hugo Ceniceros Olave - Desarrollador Fullstack y experto en\n			ciberseguridad.\n		</title><script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" defer><\/script>', '</head> <body> <main class="flex flex-col gap-8 p-8 max-w-3xl mx-auto"> ', " </main> </body></html>"])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Jobs", $$Jobs, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Habilities", $$Habilities, {})} ` })}`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/porfolio/porfolio/porfolioMinimal/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
