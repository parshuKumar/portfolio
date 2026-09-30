import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Intro } from "@/components/sections/about/Intro";
import { TechMarquee } from "@/components/sections/about/TechMarquee";
import { Highlights } from "@/components/sections/about/Highlights";
import { Services } from "@/components/sections/about/Services";
import { HireMe } from "@/components/sections/about/HireMe";
import { Impact } from "@/components/sections/about/Impact";
import { Process } from "@/components/sections/about/Process";
import { Now } from "@/components/sections/about/Now";
import { CodingProfiles } from "@/components/sections/about/CodingProfiles";
import { Recommendations } from "@/components/sections/about/Recommendations";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <>
      <PageTitle>About me</PageTitle>
      <div className="space-y-12">
        <Reveal>
          <Intro />
        </Reveal>
        <Reveal>
          <TechMarquee />
        </Reveal>
        <Reveal>
          <Highlights />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <HireMe />
        </Reveal>
        <Reveal>
          <Impact />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Now />
        </Reveal>
        <Reveal>
          <CodingProfiles />
        </Reveal>
        <Reveal>
          <Recommendations />
        </Reveal>
      </div>
    </>
  );
}
