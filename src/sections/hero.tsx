"use client";
import Button from "@/component/Button";
import { IconCloud } from "@/component/interactive-icon-cloud";
import { slugs } from "@/contants";
import React from "react";

const Hero = () => {
  return (
    <section
      className="py-18 overflow-x-clip flex flex-col lg:flex-row container items-center"
    >
      <div className="relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6 max-w-4xl mx-auto">
          Impactful design, created effortlessly
        </h1>
        <p className="text-xl text-center text-black/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-black/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 flex-1 w-full outline-none"
          />
          <Button
            variant="primary"
            type="submit"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign up
          </Button>
        </form>
      </div>
      <IconCloud iconSlugs={slugs} />
    </section>
  );
};

export default Hero;