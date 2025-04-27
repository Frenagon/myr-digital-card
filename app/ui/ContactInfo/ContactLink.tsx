import Image, { ImageProps } from "next/image";

export default function ContactLink({
  imageData,
  text,
  href,
}: {
  imageData: ImageProps;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center py-2 hover:bg-primary-200"
    >
      <Image className="ml-6 w-10" {...imageData} />
      <span className="ml-4">{text}</span>
    </a>
  );
}
