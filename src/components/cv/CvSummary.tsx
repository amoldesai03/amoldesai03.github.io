"use client";

import { cvSummary } from "@/content/site";
import { useYears } from "../Years";
import { Rich } from "./Rich";

export function CvSummary({ buildYears }: { buildYears: number }) {
  return <Rich text={cvSummary(useYears(buildYears))} />;
}
