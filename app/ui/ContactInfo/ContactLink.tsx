import Image, { ImageProps } from "next/image";

export default function ContactLink({
  imageData,
  text,
  onClick,
}: {
  imageData: ImageProps;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center py-2 hover:bg-primary-300"
    >
      {/* <Image {...imageData} /> */}
      <img
        src={imageData.src as string}
        alt={imageData.alt}
        className="ml-6 aspect-square w-10 rounded-full"
      />
      <span className="ml-4">{text}</span>
    </button>
  );
}
