"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/content/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timeZone,
});

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

const getSnapshot = () => formatter.format(new Date());
const getServerSnapshot = () => "--:--";

export function LocalTime({ className }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <span className={className}>
      Pune <span className="tabular-nums">{time}</span> IST
    </span>
  );
}
