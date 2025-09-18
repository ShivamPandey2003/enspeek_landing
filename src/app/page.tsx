import GalleryHoverCarousel from "@/component/gallery-hover-carousel";
import { exampleData1 } from "@/contants";
import { Footer } from "@/sections/footer";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import NewSections from "@/sections/NewSections";
import SectionWithMockup from "@/sections/section-with-mockup";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionWithMockup {...exampleData1} />
      <GalleryHoverCarousel />
      <NewSections />
      <Footer
        className="mt-20"
        brand={{
          name: "webtics",
          description: "Track and monitor your website traffic.",
        }}
        socialLinks={[
          {
            name: "Twitter",
            href: "#",
          },
          {
            name: "Github",
            href: "#",
          },
          {
            name: "Discord",
            href: "#",
          },
        ]}
        columns={[
          {
            title: "Product",
            links: [
              {
                name: "Features",
                href: "#features",
              },
              {
                name: "Pricing",
                href: "#pricing",
              },
              {
                name: "Integrations",
                href: "#integrations",
              },
              {
                name: "API Documentation",
                href: "#",
              },
            ],
          },
          {
            title: "Compare",
            links: [
              {
                name: "Plausible",
                href: "#",
              },
              {
                name: "Matomo",
                href: "#",
              },
              {
                name: "Google Analytics",
                href: "#",
              },
            ],
          },
          {
            title: "Legal",
            links: [
              {
                name: "Privacy Policy",
                href: "#",
              },
              {
                name: "Terms of Service",
                href: "#",
              },
            ],
          },
        ]}
        copyright="Enspeek Inc. © 2024"
      />
    </>
  );
}
