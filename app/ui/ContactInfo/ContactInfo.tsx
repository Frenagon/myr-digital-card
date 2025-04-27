"use client";

import ContactLink from "./ContactLink";

export default function ContactInfo({ className }: { className: string }) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <ContactLink
        imageData={{
          src: "/social/whatsapp-icon.svg",
          alt: "WhatsApp Icon",
          width: 100,
          height: 100,
        }}
        text="Mandame mensaje en WhatsApp"
        href="https://wa.me/5213311500850"
      />
      <ContactLink
        imageData={{
          src: "/social/instagram-icon.svg",
          alt: "Instagram Icon",
          width: 100,
          height: 100,
        }}
        text="Sigueme en Instagram"
        href="https://www.instagram.com/medimyr/"
      />
      <ContactLink
        imageData={{
          src: "/social/phone-icon.svg",
          alt: "Phone Icon",
          width: 100,
          height: 100,
        }}
        text="Llamame por telefono"
        href="tel:5213311500850"
      />
      <ContactLink
        imageData={{
          src: "/social/email-icon.svg",
          alt: "Email Icon",
          width: 100,
          height: 100,
        }}
        text="Mandame un correo"
        href="mailto:medimyr@gmail.com"
      />
      <ContactLink
        imageData={{
          src: "/social/map-icon.svg",
          alt: "Email Icon",
          width: 100,
          height: 100,
        }}
        text="Encuentrame aqui"
        href="https://maps.app.goo.gl/WUaqTK4E3Ayshr1B7"
      />
    </div>
  );
}
