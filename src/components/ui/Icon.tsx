import type { ComponentType, SVGProps } from "react";
import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Clock,
  Cloud,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Layout,
  Mail,
  MapPin,
  MessageSquareQuote,
  Package,
  Phone,
  Rocket,
  Server,
  Sparkles,
  Star,
  Terminal,
  Trophy,
  Zap,
} from "lucide-react";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

/* Brand marks (lucide dropped brand icons); simple filled paths. */
function GithubMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
function LinkedinMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.3A1.8 1.8 0 1 1 6.5 4.7a1.8 1.8 0 0 1 0 3.6zM19 19h-3v-4.7c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3v-9h3v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.7 1.3 3.7 4.2z" />
    </svg>
  );
}
function LeetcodeMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.7 2.3a1.2 1.2 0 0 1 1.7 0 1.2 1.2 0 0 1 0 1.7L9.6 11a2.6 2.6 0 0 0 0 3.7l3.3 3.3a2.6 2.6 0 0 0 3.7 0l1.9-1.9a1.2 1.2 0 0 1 1.7 1.7l-1.9 1.9a5 5 0 0 1-7.1 0l-3.3-3.3a5 5 0 0 1 0-7.1z" />
      <path d="M10.6 14.5a1.2 1.2 0 0 1 1.2-1.2h8a1.2 1.2 0 0 1 0 2.4h-8a1.2 1.2 0 0 1-1.2-1.2z" />
    </svg>
  );
}
function NpmMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 6h20v12H12.5v2H8v-2H2zm2 2v8h4V10h2v6h2V8zm10 0v8h4v-6h2v6h2V8z" />
    </svg>
  );
}

/**
 * Icon names used inside the JSON data files map to lucide icons here.
 * Add a new key when a JSON file references an icon that is missing.
 */
const icons: Record<string, SvgIcon> = {
  award: Award,
  book: BookOpen,
  bot: Bot,
  briefcase: Briefcase,
  clock: Clock,
  cloud: Cloud,
  code: Code2,
  database: Database,
  github: GithubMark,
  gfg: Code2,
  globe: Globe,
  "graduation-cap": GraduationCap,
  layout: Layout,
  linkedin: LinkedinMark,
  leetcode: LeetcodeMark,
  mail: Mail,
  "map-pin": MapPin,
  npm: NpmMark,
  package: Package,
  phone: Phone,
  quote: MessageSquareQuote,
  rocket: Rocket,
  server: Server,
  sparkles: Sparkles,
  star: Star,
  terminal: Terminal,
  trophy: Trophy,
  zap: Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
