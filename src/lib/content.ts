/**
 * Single entry point for all site content.
 * Components import from here, never from the JSON files directly,
 * so every file is type-checked against `src/types/content.ts`.
 */
import type {
  Achievement,
  CaseStudy,
  CodingProfile,
  Education,
  Experience,
  Highlight,
  Hiring,
  Impact,
  Navigation,
  NowItem,
  ProcessStep,
  Profile,
  Projects,
  Recommendation,
  Roles,
  Service,
  Site,
  Skills,
} from "@/types/content";

import siteJson from "@/data/site.json";
import profileJson from "@/data/profile.json";
import rolesJson from "@/data/roles.json";
import navigationJson from "@/data/navigation.json";
import highlightsJson from "@/data/highlights.json";
import servicesJson from "@/data/services.json";
import impactJson from "@/data/impact.json";
import processJson from "@/data/process.json";
import nowJson from "@/data/now.json";
import profilesJson from "@/data/profiles.json";
import recommendationsJson from "@/data/recommendations.json";
import experienceJson from "@/data/experience.json";
import educationJson from "@/data/education.json";
import skillsJson from "@/data/skills.json";
import projectsJson from "@/data/projects.json";
import caseStudiesJson from "@/data/caseStudies.json";
import achievementsJson from "@/data/achievements.json";
import hiringJson from "@/data/hiring.json";

export const site: Site = siteJson;
export const profile: Profile = profileJson as Profile;
export const roles: Roles = rolesJson;
export const navigation: Navigation = navigationJson;
export const highlights: Highlight[] = highlightsJson;
export const services: Service[] = servicesJson;
export const impact: Impact[] = impactJson;
export const process: ProcessStep[] = processJson;
export const now: NowItem[] = nowJson;
export const codingProfiles: CodingProfile[] = profilesJson;
export const recommendations: Recommendation[] = recommendationsJson;
export const experience: Experience[] = experienceJson;
export const education: Education[] = educationJson;
export const skills: Skills = skillsJson;
export const projects: Projects = projectsJson;
export const caseStudies: CaseStudy[] = caseStudiesJson;
export const achievements: Achievement[] = achievementsJson;
export const hiring: Hiring = hiringJson;

/** Build the logo image URL for a skill from `skills.json`. */
export function skillLogoUrl(id: string, explicitUrl?: string): string {
  if (explicitUrl) return explicitUrl;
  return skills.logoProvider.replace("{id}", id);
}
