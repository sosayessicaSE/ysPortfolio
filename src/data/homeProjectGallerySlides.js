/**
 * Hero gallery on Home: Onix first, then each project's first screenshot in `projects.jsx` → `projectsData` order.
 */
import splitsquids1 from '../images/projects/splitsquid1.png';
import websitesprint1 from '../images/projects/websitesprint1.png';
import safehalt1 from '../images/projects/safehalt1.png';
import gp1 from '../images/projects/gp_1.png';
import coding_temple1 from '../images/projects/ct_1.png';
import yr1 from '../images/projects/yr_1.png';
import ds1 from '../images/projects/ds_1.png';
import onix2 from '../images/projects/onix2.png';
import sunrise1 from '../images/projects/sunrise1.png';
import cb1 from '../images/projects/cb1.png';
import venus1 from '../images/projects/venus1.png';
import figuritas1 from '../images/projects/figuritas1.png';

/** @typedef {{ src: string; titleKey: string }} HomeProjectGallerySlide */

/** @type {HomeProjectGallerySlide[]} */
export const HOME_PROJECT_GALLERY_SLIDES = [
  { src: onix2, titleKey: 'projectsData.onix.title' },
  { src: splitsquids1, titleKey: 'projectsData.splitSquids.title' },
  { src: websitesprint1, titleKey: 'projectsData.websiteSprint.title' },
  { src: safehalt1, titleKey: 'projectsData.safeHalt.title' },
  { src: gp1, titleKey: 'projectsData.globalpassport.title' },
  { src: coding_temple1, titleKey: 'projectsData.codingtemple.title' },
  { src: yr1, titleKey: 'projectsData.yr.title' },
  { src: ds1, titleKey: 'projectsData.lavanderiadaserras.title' },
  { src: sunrise1, titleKey: 'projectsData.sunrise.title' },
  { src: cb1, titleKey: 'projectsData.codingBot.title' },
  { src: venus1, titleKey: 'projectsData.venusSd.title' },
  { src: figuritas1, titleKey: 'projectsData.qatarCollection.title' },
];
