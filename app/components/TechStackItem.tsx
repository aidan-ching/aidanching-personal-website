import Image from "next/image";

export default function TechStackItem({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center flex-col gap-2 hover:scale-125 transition-transform">
      <div className="">
        <Image src={src} width={60} height={60} alt={`icon for ${label}`}  className=""/>
      </div>

      <div className="text-xs">{label}</div>
    </div>
  );
}
