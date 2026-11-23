/**
 * Single source of truth for portfolio projects (Projects page, Home "Selected work").
 * Text lives in locales under projectsData.<key> (title, type, summary, description, points).
 * `onix: true` marks work that is also listed on https://onixai.net.
 */
import atlas1 from "../images/projects/atlas1.webp";
import cb1 from "../images/projects/cb1.png";
import cria1 from "../images/projects/cria1.webp";
import ct1 from "../images/projects/ct_1.png";
import ct2 from "../images/projects/ct_2.png";
import ct3 from "../images/projects/ct_3.png";
import ct4 from "../images/projects/ct_4.png";
import ct5 from "../images/projects/ct_5.png";
import ct6 from "../images/projects/ct_6.png";
import cultiva1 from "../images/projects/cultiva1.webp";
import cultiva2 from "../images/projects/cultiva2.webp";
import dreamdoctor1 from "../images/projects/dreamdoctor1.webp";
import ds1 from "../images/projects/ds_1.png";
import ds2 from "../images/projects/ds_2.png";
import ds3 from "../images/projects/ds_3.png";
import ds4 from "../images/projects/ds_4.png";
import figuritas1 from "../images/projects/figuritas1.png";
import figuritas2 from "../images/projects/figuritas2.png";
import figuritas3 from "../images/projects/figuritas3.png";
import figuritas4 from "../images/projects/figuritas4.png";
import figuritas5 from "../images/projects/figuritas5.png";
import gp1 from "../images/projects/gp_1.png";
import gp2 from "../images/projects/gp_2.png";
import gp3 from "../images/projects/gp_3.png";
import gp4 from "../images/projects/gp_4.png";
import gp5 from "../images/projects/gp_5.png";
import onixSite1 from "../images/projects/onix-site1.jpg";
import onixSite2 from "../images/projects/onix-site2.jpg";
import onixSite3 from "../images/projects/onix-site3.jpg";
import retailogists1 from "../images/projects/retailogists1.webp";
import safehalt1 from "../images/projects/safehalt1.png";
import safehalt2 from "../images/projects/safehalt2.png";
import safehalt3 from "../images/projects/safehalt3.png";
import splitsquid1 from "../images/projects/splitsquid1.png";
import splitsquid2 from "../images/projects/splitsquid2.png";
import splitsquid3 from "../images/projects/splitsquid3.png";
import splitsquid4 from "../images/projects/splitsquid4.png";
import splitsquid5 from "../images/projects/splitsquid5.png";
import sunrise1 from "../images/projects/sunrise1.png";
import sunrise2 from "../images/projects/sunrise2.png";
import sunrise3 from "../images/projects/sunrise3.png";
import venus1 from "../images/projects/venus1.png";
import venus2 from "../images/projects/venus2.png";
import venus3 from "../images/projects/venus3.png";
import venus4 from "../images/projects/venus4.png";
import websitesprint1 from "../images/projects/websitesprint1.png";
import websitesprint2 from "../images/projects/websitesprint2.png";
import websitesprint3 from "../images/projects/websitesprint3.png";
import wewash1 from "../images/projects/wewash1.webp";
import wewash2 from "../images/projects/wewash2.webp";
import yr1 from "../images/projects/yr_1.png";
import yr2 from "../images/projects/yr_2.png";
import yr3 from "../images/projects/yr_3.png";

export const ONIX_URL = "https://onixai.net";

/**
 * cover: how the first image sits in the card. "cover" fills the frame (screenshots),
 * "contain" shows the whole image on a colored backdrop (logos, illustrations).
 */
export const PROJECTS = [
  { key: "cultiva", images: [cultiva1, cultiva2], url: "https://getcultiva.com/", caseUrl: `${ONIX_URL}/work/cultiva`, onix: true, stack: ["Next.js", "Electron", "React", "Supabase", "Slack", "Teams"] },
  { key: "wewash", images: [wewash1, wewash2], url: "https://www.wewashbr.com", caseUrl: `${ONIX_URL}/work/wewash`, onix: true, stack: ["Expo", "React Native", "Supabase", "Google Maps", "WhatsApp"] },
  { key: "splitSquids", images: [splitsquid1, splitsquid2, splitsquid3, splitsquid4, splitsquid5], year: "2026", onix: true, stack: ["React", "Node.js"] },
  { key: "safeHalt", images: [safehalt1, safehalt2, safehalt3], year: "2026", url: "https://www.safehalt.org/", onix: true, stack: ["React", "Node.js"] },
  { key: "websiteSprint", images: [websitesprint1, websitesprint2, websitesprint3], year: "2026", url: "https://tropicalyear.studio/", onix: true, stack: ["React", "Node.js"] },
  { key: "globalpassport", images: [gp1, gp2, gp3, gp4, gp5], year: "2025", url: "https://globalpassport.ai/", onix: true, stack: ["React", "Node.js", "AWS", "Figma"] },
  { key: "cria", images: [cria1], url: "https://criabrazil.com/", onix: true, fit: "contain", backdrop: "#16100c" },
  { key: "retailogists", images: [retailogists1], url: "https://www.retailogists.com/", onix: true, fit: "contain", backdrop: "#3cd12f" },
  { key: "atlas", images: [atlas1], url: "https://www.futureproofing.dev/", onix: true, fit: "contain", backdrop: "#000000" },
  { key: "dreamDoctor", images: [dreamdoctor1], onix: true, fit: "contain", backdrop: "#121013" },
  { key: "codingtemple", images: [ct1, ct2, ct3, ct4, ct5, ct6], year: "2023", url: "https://www.codingtemple.com/", onix: true, stack: ["React", "Node.js", "Flask", "SQL"] },
  { key: "yr", images: [yr1, yr2, yr3], year: "2025", onix: true, stack: ["React", "Node.js", "Flask", "SQL"] },
  { key: "sunrise", images: [sunrise1, sunrise2, sunrise3], year: "2024", url: "https://sosayessicase.github.io/Sunrise/", onix: true, stack: ["React", "Node.js"] },
  { key: "onix", images: [onixSite1, onixSite2, onixSite3], year: "2026", url: ONIX_URL, stack: ["Next.js", "React", "TypeScript", "Vercel"] },
  { key: "lavanderiadaserras", titleOverride: "Das Serras", images: [ds1, ds2, ds3, ds4], year: "2025", url: "https://www.lavanderiadaserras.com/", stack: ["React", "Node.js"] },
  { key: "codingBot", images: [cb1], year: "2024", stack: ["React", "Python"] },
  { key: "venusSd", images: [venus1, venus2, venus3, venus4], year: "2022", url: "https://sosayessicase.github.io/Servicios-Digitales/", stack: ["HTML", "CSS", "JavaScript"] },
  { key: "qatarCollection", images: [figuritas1, figuritas2, figuritas3, figuritas4, figuritas5], year: "2022", url: "https://coleccionqatar.onrender.com/", stack: ["JavaScript", "CSS"] },
];

export const FEATURED_KEYS = ["cultiva", "wewash", "splitSquids", "safeHalt"];

/** Resolve translated fields for a project. */
export function localizeProject(project, t) {
  const base = `projectsData.${project.key}`;
  const points = t(`${base}.points`, { returnObjects: true });
  return {
    ...project,
    title: project.titleOverride || t(`${base}.title`),
    type: t(`${base}.type`),
    summary: t(`${base}.summary`),
    description: t(`${base}.description`),
    points: Array.isArray(points) ? points : [],
  };
}
