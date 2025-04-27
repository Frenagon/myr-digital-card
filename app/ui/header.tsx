import Image from "next/image";
import { HTMLAttributes } from "react";

export default function Header({ className }: { className: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-1 items-center justify-center bg-primary-300">
        <Image
          src="/logo.png"
          alt="Un estetoscopio con una cara feliz"
          height={548}
          width={549}
          sizes="100vw"
          className="w-2/7"
        />
      </div>
      <Image
        src="/profile-picture.png"
        alt="La doctora Myriam posando en su consultorio"
        height={1542}
        width={2048}
        sizes="100vw"
        className="-mt-[calc(25%/2)] ml-6 aspect-square w-1/4 self-start rounded-full object-cover"
      />
    </div>
  );
}
