import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TabNav } from "@/components/layout/TabNav";
import { PageTransition } from "@/components/layout/PageTransition";
import { Footer } from "@/components/layout/Footer";

/**
 * Page frame shared by every route: profile sidebar on the left,
 * content card with tab navigation on the right.
 */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        <Sidebar />
        <main
          id="content"
          className="relative min-w-0 flex-1 rounded-card border border-line bg-card shadow-card"
        >
          <TabNav />
          <div className="px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pb-12">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
