import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment, e as renderSlot, f as renderHead } from '../chunks/astro/server_CpqH38Fn.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_DDFh3DwF.mjs';
export { renderers } from '../renderers.mjs';

const languages = {
  en: "en",
  es: "es"
};
const defaultLang = "es";
const ui = {
  en: {
    "hero.nombre": "Hugo Ceniceros Olave",
    "hero.toggle": "Toggle language",
    "hero.subtitle": "Fullstack developer and cybersecurity enthusiast.",
    "hero.location": "Logroño, Spain",
    "hero.link.cv": "Download CV",
    "hero.link.github": "Open GitHub",
    "hero.link.linkedin": "Open LinkedIn",
    "about.title": "About me",
    "about.description": "I am a fullstack developer with experience building web and mobile applications. I love technology and I am always learning new skills to improve my craft.",
    "education.title": "Education",
    "education.description_1": "I studied computer engineering, gaining knowledge in programming, software development, databases and networks. I participated in practical projects that allowed me to apply my technical skills.",
    "education.description_2": "I completed an intensive fullstack web development course where I learned to build web applications using HTML, CSS, JavaScript, Node.js and React. I developed several practical projects during the course.",
    "skills.title": "Skills",
    "projects.title": "Projects",
    "project.tasks_app.title": "Tasks App",
    "project.tasks_app.description": "I developed a task management application using React for the frontend and Node.js with Express for the backend. The app allows users to create, edit and delete tasks and organize them into categories.",
    "project.portfolio.title": "Portfolio Website",
    "project.portfolio.description": "I created a personal portfolio website using Astro and Tailwind CSS. The site showcases my projects, skills and work experience, and is optimized for SEO and performance.",
    "jobs.title": "Work experience",
    "jobs.globant.description": "I developed and maintained web applications using technologies such as React, Node.js and MongoDB. I collaborated with cross-functional teams to deliver high-quality projects on time.",
    "jobs.techsolutions.description": "I participated in the development of web and mobile applications, working with technologies such as JavaScript, Python and SQL. I implemented scalable and optimized solutions to improve application performance."
  },
  es: {
    "hero.nombre": "Hugo Ceniceros Olave",
    "hero.toggle": "Cambiar idioma",
    "hero.subtitle": "Desarrollador fullstack y experto en ciberseguridad.",
    "hero.location": "Logroño, España",
    "hero.link.cv": "Descargar CV",
    "hero.link.github": "Abrir GitHub",
    "hero.link.linkedin": "Abrir LinkedIn",
    "about.title": "Sobre mí",
    "about.description": "Soy un desarrollador fullstack, actualmente estudiando un curso de especialización en ciberseguridad. Me apasiona la tecnología y siempre estoy aprendiendo nuevas habilidades para mejorar. Me destaco por mi capacidad de adaptación y aprendizaje rápido, aparte de ser un gran comunicador y buen compañero de equipo.",
    "education.title": "Educación",
    "education.description_1": "Estudié el ciclo formativo de grado superior en desarrollo de aplicaciones web, adquiriendo conocimientos en programación, desarrollo de software, bases de datos y algo de redes.",
    "education.description_2": "Actualmente estoy cursando una especialización en ciberseguridad, donde estoy aprendiendo sobre protección de sistemas, redes y datos contra amenazas y ciberataques.",
    "skills.title": "Habilidades",
    "projects.title": "Proyectos",
    "project.tasks_app.title": "Aplicación de Tareas",
    "project.tasks_app.description": "Desarrollé una aplicación de gestión de tareas utilizando React para el frontend y Node.js con Express para el backend. La aplicación permite a los usuarios crear, editar y eliminar tareas, así como organizarlas en categorías.",
    "project.portfolio.title": "Sitio Web de Portafolio",
    "project.portfolio.description": "Creé un sitio web de portafolio personal utilizando Astro y Tailwind CSS. El sitio presenta mis proyectos, habilidades y experiencia laboral, y está optimizado para SEO y rendimiento.",
    "jobs.title": "Experiencia laboral",
    "jobs.globant.description": "Aquí aporte todo mi conocimiento sobre el desarrollo web, sobre todo centrado en el Frontend, aprendí a gestionar la entrega a tiempo de proyectos así como trabajar profesionalmente en equipo internacional. Estuve trabajando con tecnologías como Astro, Next.js, React y Liquid Sopify entre otras.",
    "jobs.techsolutions.description": "Mi labor en este puesto de trabajo era, desde el montaje de equipos y su mantenimiento, recuperación de datos y preparación de equipos TPV hasta montaje y mantenimiento de servidores."
  }
};

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

const $$Astro$c = createAstro("https://hugoceniceros.com");
const $$LenguageToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LenguageToggle;
  const currentLang = getLangFromUrl(Astro2.url) ?? "";
  const translatePath = useTranslatedPath(currentLang);
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-end"> <span class="flex flex-row max-w-min rounded-full bg-background-icons p-1 gap-1 "> ${Object.entries(languages).map(([lang, label]) => renderTemplate`<a${addAttribute(`px-2 rounded-full font-body font-medium transition-all duration-800 ease-in-out text-sm ${currentLang === lang ? "bg-background-primary text-text-subtitle shadow-md" : "bg-transparent text-text-subtitle hover:bg-background-focus hover:text-text-subtitle"}`, "class")}${addAttribute(translatePath("/", lang), "href")}> ${label} </a>`)} </span> </div>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/molecules/lenguageToggle.astro", void 0);

const $$Astro$b = createAstro("https://hugoceniceros.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-4"> <div> ${renderComponent($$result, "LenguageToggle", $$LenguageToggle, {})} </div> <div class="justify-items-center md:flex md:flex-row-reverse md:justify-between"> ${renderComponent($$result, "Image", $$Image, { "src": "/avatar.png", "alt": "Avatar", "width": 120, "height": 120, "loading": "eager", "class": "" })} <div class="text-center flex flex-col gap-2 md:text-start"> <div> <h1 class="font-titles font-bold color-text-title text-3xl"> ${t("hero.nombre")} </h1> <h2 class="font-titles text-text-subtitle"> ${t("hero.subtitle")} </h2> <span class="flex flex-row justify-center items-center gap-2 font-body text-text-body md:justify-start"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:world", "width": "20", "height": "20", "inline": true })} ${t("hero.location")} </span> </div> <div class="flex gap-4 justify-center md:justify-start"> <a href="/Currículum-HugoCenicerosOlave.pdf" class="flex items-center gap-2 border border-icons px-2 py-2 rounded-lg hover:bg-background-icons" download="Currículum-HugoCenicerosOlave.pdf"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-text-subtitle", "icon": "mdi:file-document-outline", "width": "20", "height": "20", "inline": true })} <span class="sr-only">${t("hero.link.cv")}</span> </a> <a href="https://github.com/cenii"${addAttribute(t("hero.link.github"), "aria-label")} class="flex items-center gap-2 border border-icons px-2 py-2 rounded-lg hover:bg-background-icons" target="_blank"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-text-subtitle", "icon": "mdi:github", "width": "20", "height": "20", "inline": true })} </a> <a href="https://www.linkedin.com/in/HugoCenicerosOlave"${addAttribute(t("hero.link.linkedin"), "aria-label")} class="flex items-center gap-2 border border-icons px-2 py-2 rounded-lg hover:bg-background-icons" target="_blank"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-text-subtitle", "icon": "mdi:linkedin", "width": "20", "height": "20", "inline": true })} </a> </div> </div> </div> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/Hero.astro", void 0);

const $$Astro$a = createAstro("https://hugoceniceros.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("about.title")}</h2> <p class="font-body text-text-body">${t("about.description")}</p> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/About.astro", void 0);

const $$Astro$9 = createAstro("https://hugoceniceros.com");
const $$HaederJobs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HaederJobs;
  const { company, job, from, to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between"> <div class="flex flex-col gap-1"> <h3 class="text-[18px] font-medium">${company}</h3> <span class="">${job}</span> </div> <time class="text-right font-body text-text-body text-[14px]">${from} - ${to}</time> </header>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/molecules/haederJobs.astro", void 0);

const $$Astro$8 = createAstro("https://hugoceniceros.com");
const $$Jobs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Jobs;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("jobs.title")}</h2> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HaederJobs", $$HaederJobs, { "company": "Globant", "job": "Front-End Developer", "from": "02/2025", "to": "06/2025" })} <p class="font-body text-text-body">${t("jobs.globant.description")}</p> </article> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HaederJobs", $$HaederJobs, { "company": "Tech Solutions", "job": "Desarrollador Fullstack", "from": "01/2023", "to": "12/2024" })} <p class="font-body text-text-body">${t("jobs.techsolutions.description")}</p> </article> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/Jobs.astro", void 0);

const $$Astro$7 = createAstro("https://hugoceniceros.com");
const $$HeaderEducation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeaderEducation;
  const { name, from, to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between"> <div class="flex flex-col gap-1"> <h3 class="text-[18px] font-medium">${name}</h3> </div> <time class="text-right font-body text-text-body text-[14px]">${from} - ${to}</time> </header>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/molecules/headerEducation.astro", void 0);

const $$Astro$6 = createAstro("https://hugoceniceros.com");
const $$Education = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Education;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("education.title")}</h2> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HeaderEducation", $$HeaderEducation, { "name": "IES Comercio", "from": "09/2020", "to": "06/2024" })} <p class="font-body text-text-body">${t("education.description_1")}</p> </article> <article class="flex flex-col gap-2"> ${renderComponent($$result, "HeaderEducation", $$HeaderEducation, { "name": "IES Comercio", "from": "01/2022", "to": "12/2022" })} <p class="font-body text-text-body">${t("education.description_2")}</p> </article> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/Education.astro", void 0);

const $$Astro$5 = createAstro("https://hugoceniceros.com");
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Project;
  const { title, definition, names } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col gap-2 border border-background-icons rounded-lg p-2 md:items-center md:p-2 md:border md:border-background-icons md:rounded-lg md:h-min"> <h3 class="text-[18px] font-medium md:text-center">${title}</h3> <p class="font-body text-text-body text-[14px]">${definition}</p> <div class="flex flex-wrap gap-2"> ${names && names.length > 0 ? names.map((name) => renderTemplate`<span class="font-body text-text-subtitle bg-background-icons text-[12px] px-2 py-1 rounded-lg"> ${name} </span>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} </div> </article>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/molecules/project.astro", void 0);

const $$Astro$4 = createAstro("https://hugoceniceros.com");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const PROJECTS = [
    {
      title: t("project.tasks_app.title"),
      definition: t("project.tasks_app.description"),
      names: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript"
      ]
    },
    {
      title: t("project.portfolio.title"),
      definition: t("project.portfolio.description")
    },
    {
      title: t("project.portfolio.title"),
      definition: t("project.portfolio.description")
    },
    {
      title: t("project.portfolio.title"),
      definition: t("project.portfolio.description")
    },
    {
      title: t("project.portfolio.title"),
      definition: t("project.portfolio.description")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl"> ${t("projects.title")} </h2> <div id="projects-carousel" class="flex flex-nowrap items-start overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:snap-none"> <div class="contents md:flex md:flex-col md:gap-4"> ${PROJECTS.slice(0, 2).map((project) => renderTemplate`<div class="min-w-full snap-center md:min-w-0"> ${renderComponent($$result, "Project", $$Project, { "title": project.title, "definition": project.definition, "names": project.names })} </div>`)} </div> <div class="contents md:flex md:flex-col md:gap-4"> ${PROJECTS.slice(2).map((project) => renderTemplate`<div class="min-w-full snap-center md:min-w-0"> ${renderComponent($$result, "Project", $$Project, { "title": project.title, "definition": project.definition, "names": project.names })} </div>`)} </div> </div> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/Projects.astro", void 0);

const $$Astro$3 = createAstro("https://hugoceniceros.com");
const $$Habilitie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Habilitie;
  const { name, icoName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="font-body text-text-title bg-background-icons text-[14px] px-2 py-1 rounded-lg flex items-center gap-2"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": `mdi:${icoName}`, "width": "16", "height": "16", "inline": true })} <span class="relative top-0.5">${name}</span> </div>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/molecules/habilitie.astro", void 0);

const $$Astro$2 = createAstro("https://hugoceniceros.com");
const $$Habilities = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Habilities;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2"> <h2 class="font-titles font-bold color-text-title text-2xl">${t("skills.title")}</h2> <div class="flex flex-wrap gap-2"> ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "JavaScript", "icoName": "language-javascript" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "TypeScript", "icoName": "language-typescript" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "React", "icoName": "react" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "Node.js", "icoName": "nodejs" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "MongoDB", "icoName": "database" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "HTML5", "icoName": "language-html5" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "CSS3", "icoName": "language-css3" })} ${renderComponent($$result, "Habilitie", $$Habilitie, { "name": "Tailwind CSS", "icoName": "tailwind" })} </div> </section>`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/components/Habilities.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://hugoceniceros.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"', '><!-- SEO --><title>\n			Hugo Ceniceros Olave - Desarrollador Fullstack y experto en\n			ciberseguridad.\n		</title><meta name="description" content="Desarrollador fullstack y experto en ciberseguridad. Especializado en crear aplicaciones web modernas y seguras."><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title" content="Hugo Ceniceros Olave - Fullstack Developer"><meta property="og:description" content="Desarrollador fullstack y experto en ciberseguridad. Portafolio profesional."><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title" content="Hugo Ceniceros Olave - Fullstack Developer"><meta property="twitter:description" content="Desarrollador fullstack y experto en ciberseguridad. Portafolio profesional."><meta property="twitter:image"', '><script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" defer><\/script>', '</head> <body> <main class="flex flex-col gap-8 p-8 max-w-3xl mx-auto"> ', " </main> </body></html>"])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), addAttribute(new URL(Astro2.url.pathname, Astro2.site), "href"), addAttribute(Astro2.url, "content"), addAttribute(new URL("/avatar.png", Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(new URL("/avatar.png", Astro2.url), "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://hugoceniceros.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  if (!lang || !Object.keys(languages).includes(lang)) {
    return Astro2.redirect("/es");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Jobs", $$Jobs, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Habilities", $$Habilities, {})} ` })}`;
}, "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/porfolio/porfolioMinimal/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
