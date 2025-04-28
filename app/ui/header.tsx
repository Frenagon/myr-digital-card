import Image from "next/image";

export default function Header({ className }: { className: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-b from-primary-100 to-primary-200 ${className}`}
    >
      <Image
        src="/profile-picture.png"
        alt="La doctora Myriam posando en su consultorio"
        height={1542}
        width={2048}
        sizes="100vw"
        className="aspect-square w-1/3 rounded-full object-cover"
      />
    </div>
  );
}
