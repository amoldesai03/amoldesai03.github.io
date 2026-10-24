import type { Metadata } from "next";
import Image from "next/image";
import { formatYears, profile, yearsOfExperience } from "@/content/site";

export const metadata: Metadata = {
  title: `${profile.name} / Share card`,
  robots: { index: false, follow: false },
};

const stats = (years: number) => [
  { value: "1M", suffix: "+", label: "Downloads" },
  { value: "99.6", suffix: "%", label: "Crash-free" },
  { value: formatYears(years), suffix: "", label: "Years" },
];

// Rendered at deploy time into out/og.png by scripts/postbuild.mjs.
export default function OgCard() {
  return (
    <div className="og-card fixed left-0 top-0 flex h-[630px] w-[1200px] flex-col justify-between bg-white px-16 py-14 text-[#0f172a]">
      <div className="label flex justify-between border-b border-[#e2e8f0] pb-3 !text-[15px] text-[#64748b]">
        <span>Portfolio / 2026</span>
        <span>{profile.location}</span>
      </div>
      <div className="flex items-center justify-between gap-12">
        <div>
          <p className="label !text-[15px] text-[#64748b]">{profile.role}</p>
          <p className="display mt-4 text-[150px] font-semibold leading-[0.92] tracking-[-0.045em]">
            Amol
            <br />
            Desai<span className="text-[#2563eb]">.</span>
          </p>
        </div>
        <Image
          src={profile.photo}
          alt=""
          width={896}
          height={1120}
          priority
          className="h-[340px] w-[272px] rotate-2 rounded-[28px] object-cover shadow-[0_30px_60px_-25px_rgb(0_0_0/0.45)]"
        />
      </div>
      <div className="display flex gap-12 text-[54px] font-semibold leading-none tracking-[-0.04em]">
        {stats(yearsOfExperience()).map((s) => (
          <span key={s.label}>
            {s.value}
            <span className="text-[#2563eb]">{s.suffix}</span>
            <span className="label mt-2 block !text-[13px] tracking-normal text-[#64748b]">{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
