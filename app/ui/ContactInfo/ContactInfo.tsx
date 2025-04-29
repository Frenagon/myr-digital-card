"use client";

import ContactLink from "./ContactLink";

export default function ContactInfo({ className }: { className: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <ContactLink
        imageData={{
          src: "/social/doctoralia-icon.svg",
          alt: "Doctor Icon",
          width: 100,
          height: 100,
        }}
        text="Agenda tu cita en Doctoralia"
        href="https://www.doctoralia.com.mx/myriam-jeanette-cardenas-sanchez/nutriologo-clinico-medico-general/zapopan?utm_content=#highlight-calendar"
      />
      <ContactLink
        imageData={{
          src: "/social/whatsapp-icon.svg",
          alt: "WhatsApp Icon",
          width: 100,
          height: 100,
        }}
        text="Agenda tu cita por WhatsApp"
        href="https://wa.me/5213311500850"
      />
      <ContactLink
        imageData={{
          src: "/social/phone-icon.svg",
          alt: "Phone Icon",
          width: 100,
          height: 100,
        }}
        text="Llámame para agendar"
        href="tel:5213311500850"
      />
      <ContactLink
        imageData={{
          src: "/social/email-icon.svg",
          alt: "Email Icon",
          width: 100,
          height: 100,
        }}
        text="Contáctame por correo"
        href="mailto:medimyr@gmail.com"
      />
      <ContactLink
        imageData={{
          src: "/social/map-icon.svg",
          alt: "Map Icon",
          width: 100,
          height: 100,
        }}
        text="Encuéntrame en Google Maps"
        href="https://maps.app.goo.gl/WUaqTK4E3Ayshr1B7"
      />
      <ContactLink
        imageData={{
          src: "/social/instagram-icon.svg",
          alt: "Instagram Icon",
          width: 100,
          height: 100,
        }}
        text="Conóceme en Instagram"
        href="https://www.instagram.com/medimyr/"
      />
    </div>
  );
}
