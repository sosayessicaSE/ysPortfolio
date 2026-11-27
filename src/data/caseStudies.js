/**
 * Design case studies (/design/:slug). Text lives in locales under caseStudies.<slug>.
 */
import criaAreas from "../images/projects/case-cria-areas.webp";
import criaHero from "../images/projects/case-cria-hero.webp";
import criaScoreboard from "../images/projects/case-cria-scoreboard.webp";
import criaStudioCreator from "../images/projects/case-cria-studio-creator.webp";
import criaStudioHome from "../images/projects/case-cria-studio-home.webp";
import cultivaHero from "../images/projects/case-cultiva-hero.webp";
import cultivaSurfaces from "../images/projects/case-cultiva-surfaces.webp";
import cultiva1 from "../images/projects/cultiva1.webp";
import cultiva2 from "../images/projects/cultiva2.webp";
import wewashHero from "../images/projects/case-wewash-hero.webp";
import wewashHow from "../images/projects/case-wewash-how.webp";
import wewash1 from "../images/projects/wewash1.webp";
import wewash2 from "../images/projects/wewash2.webp";

export const CASE_STUDIES = [
  {
    slug: "cultiva",
    url: "https://getcultiva.com/",
    cover: cultivaHero,
    inset: cultiva2,
    theme: { bg: "#13241c", ink: "#f2efe6", accent: "#f2a7c3" },
    gallery: [cultiva1, cultivaSurfaces, cultiva2],
    stack: ["Next.js", "Electron", "React", "Supabase", "Slack", "Microsoft Teams"],
  },
  {
    slug: "cria",
    url: "https://criabrazil.com/",
    cover: criaHero,
    inset: criaScoreboard,
    theme: { bg: "#071a22", ink: "#f3ede6", accent: "#ff5f1f" },
    gallery: [criaAreas, criaScoreboard, criaStudioCreator, criaStudioHome],
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
  },
  {
    slug: "wewash",
    url: "https://www.wewashbr.com/",
    cover: wewashHero,
    inset: wewash1,
    theme: { bg: "#0a1836", ink: "#eef2fb", accent: "#5b93ff" },
    gallery: [wewash1, wewashHow, wewash2],
    stack: ["Expo", "React Native", "Supabase", "Google Maps", "WhatsApp"],
  },
];

export const getCaseStudy = (slug) => CASE_STUDIES.find((c) => c.slug === slug);
