export default function Title({ className }: { className: string }) {
  return (
    <div className={`mx-6 flex flex-col justify-center ${className}`}>
      <h1>Dra. Myriam Cárdenas</h1>
      <h2>Nutrición Clínica</h2>
    </div>
  );
}
