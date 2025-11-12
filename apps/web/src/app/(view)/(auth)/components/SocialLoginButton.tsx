import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
};

export const SocialLoginButton = ({ src, alt }: Props) => {
  return (
    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-black/30 py-2 transition-colors hover:bg-zinc-100 active:bg-black/10">
      <span className="flex items-center justify-center rounded-full bg-zinc-100 p-1">
        <Image src={src} alt={alt} className="h-6 w-6" />
      </span>
      <span>{alt}</span>
    </button>
  );
};
