import React from "react";
import type { AboutSectionProps } from "../types/index";
import { IMAGE_PATHS } from "../constants";

function AboutSection({
  id = "about",
  title = "ABOUT US",
  description = `Glorious Integrated Farming Limited is dedicated to advancing modern agricultural practices through innovative technologies and sustainable farming methods.`,
  features = [
    "Promoting sustainable agriculture",
    "Utilizing advanced farming technologies",
    "Empowering local farmers",
  ],
  backgroundImage = IMAGE_PATHS.aboutBg,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="relative flex items-center justify-center px-4 py-20 bg-center bg-cover"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="bg-[#f9f9f9] text-[#143C2F] max-w-3xl rounded-xl shadow-lg p-8 bg-opacity-95">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mb-4 text-base md:text-lg">{description}</p>
        <ul className="pl-5 space-y-2 text-base list-disc">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
