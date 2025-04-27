"use client";

import ContactLink from "./ContactLink";

export default function ContactInfo({ className }: { className: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <ContactLink
        imageData={{
          src: "https://placehold.co/400x400/5d8a87/ffe2e8?text=P",
          alt: "First Link",
          width: 400,
          height: 400,
          sizes: "100vw",
        }}
        text="Pay me via Paypal"
        onClick={() => {
          console.log("Clicked on One");
        }}
      />
      <ContactLink
        imageData={{
          src: "https://placehold.co/400x400/5d8a87/ffe2e8?text=T",
          alt: "Second Link",
          width: 400,
          height: 400,
          sizes: "100vw",
        }}
        text="Follow me on Twitter"
        onClick={() => {
          console.log("Clicked on Two");
        }}
      />
    </div>
  );
}
