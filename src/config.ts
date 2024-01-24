import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://palworldserver.github.io/", // replace this with your deployed domain
  author: "Pals",
  desc: "Choose the best Palworld server host for your gaming needs. We've broken down pricing, features, performance and support to make the choice easier for you.",
  title: "Palworld Server",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [];
