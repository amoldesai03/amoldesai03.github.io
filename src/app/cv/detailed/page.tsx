import type { Metadata } from "next";
import { CvDocument } from "@/components/cv/CvDocument";
import { CvToolbar } from "@/components/cv/CvToolbar";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: `${profile.name} / Detailed CV`,
};

export default function DetailedCv() {
  return (
    <>
      <CvToolbar variant="detailed" />
      <main className="cv-stage">
        <CvDocument variant="detailed" />
      </main>
    </>
  );
}
