import type { Metadata } from "next";
import { hiring } from "@/lib/content";
import { PageTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { HiringInfo } from "@/components/sections/contact/HiringInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactDetails } from "@/components/sections/contact/ContactDetails";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageTitle subtitle={hiring.intro}>Contact</PageTitle>

      <div className="space-y-14">
        <Reveal>
          <HiringInfo />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:items-start">
            <div className="min-w-0 lg:col-span-3">
              <ContactForm />
            </div>
            <div className="min-w-0 lg:col-span-2">
              <ContactDetails />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
