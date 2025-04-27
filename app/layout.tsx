import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consulta de Nutrición Clínica en Zapopan | Dra. Myriam Cárdenas",
  description:
    "Mejora tu salud con la Dra. Myriam Cárdenas, especialista en Nutrición Clínica en Zapopan, Jalisco. Consultas personalizadas, planes de alimentación y acompañamiento profesional. ¡Agenda tu cita hoy!",
  openGraph: {
    title: "Consulta de Nutrición Clínica en Zapopan | Dra. Myriam Cárdenas",
    description:
      "Mejora tu salud y bienestar con asesoría nutricional profesional. Agenda tu consulta con la Dra. Myriam Cárdenas en Zapopan, Jalisco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
