export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-primary-400 md:aspect-9/16 md:h-5/6 md:w-auto md:rounded-2xl md:shadow-[0_35px_50px_rgba(0,0,0,0.25)]">
        <div className="h-2/6 w-full bg-secondary-400" />
        <div className="h-1/6 w-full bg-primary-400" />
        <div className="h-2/6 w-full bg-secondary-400" />
        <div className="h-1/6 w-full bg-primary-400" />
      </div>
    </div>
  );
}
