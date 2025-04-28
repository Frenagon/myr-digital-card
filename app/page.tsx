import Header from "@/app/ui/header";
import Title from "@/app/ui/title";
import ContactInfo from "@/app/ui/ContactInfo/ContactInfo";

export default function Home() {
  return (
    <div className="flex h-screen min-h-[800px] w-screen items-center justify-center">
      <div className="flex h-full w-full min-w-[380px] flex-col overflow-hidden bg-neutral-100 md:aspect-9/16 md:h-7/8 md:w-auto md:rounded-2xl md:shadow-[0_35px_50px_rgba(0,0,0,0.3)]">
        <Header className="h-2/8" />
        <Title className="h-2/8" />
        <ContactInfo className="h-4/8" />
      </div>
    </div>
  );
}
