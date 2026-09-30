import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/sections/projects/ProjectGrid";
import { CaseStudies } from "@/components/sections/projects/CaseStudies";

export const metadata: Metadata = { title: "Projects" };

export default function Page() {
  return (
    <>
      <PageTitle subtitle="Things I've built and shipped, plus a few production case studies from work.">
        Projects
      </PageTitle>

      <div className="space-y-14">
        <ProjectGrid />
        <Reveal>
          <CaseStudies />
        </Reveal>
      </div>
    </>
  );
}
