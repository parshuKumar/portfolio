/**
 * Types for every JSON file in `src/data/`.
 * If you change the shape of a JSON file, update the matching type here
 * so `npm run build` catches mistakes.
 */

export type IconName = string;

export interface Site {
  name: string;
  url: string;
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  themeColor: string;
  locale: string;
  twitterHandle: string;
}

export interface Social {
  id: "github" | "linkedin" | "leetcode" | "npm" | "twitter" | "instagram" | "email" | string;
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  headline: string;
  tagline: string;
  avatar: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  timezone: string;
  company: string;
  companyUrl: string;
  workingSince: string;
  resumeUrl: string;
  availability: { status: "open" | "busy" | "closed"; label: string };
  bio: string[];
  socials: Social[];
}

export interface HireMeItem {
  icon: IconName;
  title: string;
  description: string;
  audience: string;
}

export interface Roles {
  intro: string;
  roles: string[];
  hireMeFor: HireMeItem[];
}

export interface NavTab {
  id: string;
  label: string;
  href: string;
}

export interface Navigation {
  tabs: NavTab[];
}

export interface Highlight {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export interface Impact {
  metric: string;
  title: string;
  detail: string;
}

export interface ProcessStep {
  step: string;
  detail: string;
}

export interface NowItem {
  label: string;
  title: string;
  detail: string;
}

export interface CodingProfile {
  id: string;
  name: string;
  handle: string;
  stat: string;
  url: string;
}

export interface Recommendation {
  quote: string;
  name: string;
  role: string;
  initials: string;
  placeholder?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  score: string;
  detail: string;
}

export interface SkillLogo {
  id: string;
  name: string;
  url?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Proficiency {
  name: string;
  percent: number;
}

export interface Skills {
  logoProvider: string;
  logos: SkillLogo[];
  groups: SkillGroup[];
  highlighted: string[];
  proficiency: Proficiency[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  npm?: string;
  docs?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  featured: boolean;
  image: string;
  summary: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
}

export interface Projects {
  categories: string[];
  items: Project[];
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  label: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  url: string;
}

export interface Achievement {
  icon: IconName;
  title: string;
  detail: string;
  url: string;
  placeholder?: boolean;
}

export interface HiringInfo {
  icon: IconName;
  label: string;
  value: string;
}

export interface Hiring {
  intro: string;
  info: HiringInfo[];
  freelance: { title: string; detail: string; cta: string };
  availabilityNote: string;
  form: { title: string; successMessage: string; errorMessage: string };
}
