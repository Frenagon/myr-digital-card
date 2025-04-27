import Header from "@/app/ui/header";
import Title from "@/app/ui/title";
import ContactInfo from "@/app/ui/ContactInfo/ContactInfo";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-primary-200 md:aspect-9/16 md:h-7/8 md:w-auto md:rounded-2xl md:shadow-[0_35px_50px_rgba(0,0,0,0.25)]">
        <Header className="h-2/6" />
        <Title className="h-1/6" />
        <ContactInfo className="h-3/6" />
      </div>
    </div>
  );
}
