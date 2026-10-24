import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export function PhoneFrame({ src, alt, width = 720, height = 1548, className = "", priority }: Props) {
  return (
    <div
      className={`relative rounded-[2.2rem] bg-[#0b0b0b] p-[7px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-black">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} className="block h-auto w-full" sizes="300px" />
        <span aria-hidden className="absolute left-1/2 top-2.5 size-2.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
      </div>
    </div>
  );
}
