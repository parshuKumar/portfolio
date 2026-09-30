import type { Metadata } from "next";
import { Download } from "lucide-react";
import { profile } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageTitle } from "@/components/ui/SectionTitle";
import { Experience } from "@/components/sections/resume/Experience";
import { Education } from "@/components/sections/resume/Education";
import { TechStack } from "@/components/sections/resume/TechStack";
import { Proficiency } from "@/components/sections/resume/Proficiency";
import { Achievements } from "@/components/sections/resume/Achievements";

export const metadata: Metadata = { title: "Resume" };

export default function Page() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 [&_header]:mb-0">
        <PageTitle subtitle="Experience, education, tech stack and achievements. Download the PDF from the sidebar.">
          Resume
        </PageTitle>
        <div className="shrink-0 sm:pt-1">
          <Button href={profile.resumeUrl} variant="ghost" external>
            <Download className="size-4" aria-hidden="true" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="space-y-12">
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <Proficiency />
        </Reveal>
        <Reveal>
          <Achievements />
        </Reveal>
      </div>
    </>
  );
}
