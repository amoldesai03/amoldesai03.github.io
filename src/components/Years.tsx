"use client";

import { useSyncExternalStore } from "react";
import { formatYears, yearsOfExperience } from "@/content/site";

const subscribe = () => () => {};

// Static export bakes in the build-time value; the client recomputes so the number stays current between deploys.
export function useYears(buildYears: number) {
  return useSyncExternalStore(subscribe, () => yearsOfExperience(), () => buildYears);
}

export function Years({ buildYears }: { buildYears: number }) {
  return <>{formatYears(useYears(buildYears))}</>;
}
