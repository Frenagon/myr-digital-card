import Image from "next/image";

export default function Header({ className }: { className: string }) {
  return (
    <div
      className={`relative mb-4 flex flex-col items-center justify-center bg-gradient-to-b from-primary-100 to-primary-200 ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="La doctora Myriam posando en su consultorio"
        height={1542}
        width={2048}
        sizes="100vw"
        className="aspect-square h-2/3"
        priority
      />
      <Image
        src="/profile-picture.png"
        alt="La doctora Myriam posando en su consultorio"
        height={1542}
        width={2048}
        sizes="100vw"
        className="absolute -bottom-1/4 left-0 ml-4 aspect-square h-1/2 w-auto rounded-full object-cover"
      />
    </div>
  );
}
