import { CvDocument } from "@/components/cv/CvDocument";
import { CvToolbar } from "@/components/cv/CvToolbar";

export default function OnePageCv() {
  return (
    <>
      <CvToolbar variant="one-page" />
      <main className="cv-stage">
        <CvDocument variant="one-page" />
      </main>
    </>
  );
}
