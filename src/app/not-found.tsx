import { PageTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div>
      <PageTitle subtitle="That page does not exist. The tabs above cover everything on this site.">Page not found</PageTitle>
      <Button href="/">Back to About</Button>
    </div>
  );
}
