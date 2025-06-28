import React from "react";
import type { AboutSectionProps } from "../types/index";
import { IMAGE_PATHS } from "../constants";

function AboutSection({
  id = "about",
  title = "ABOUT US",
  description = `Glorious Integrated Farming Limited is a purpose-driven agribusiness committed to transforming African agriculture through innovation, sustainability, and collaboration. Our vision is to build resilient farming systems that ensure food security for future generations. We are on a mission to empower farmers with the tools, training, and market access needed to drive profitable and sustainable agribusinesses.

Led by a dedicated team of agricultural experts and community development professionals, we combine traditional knowledge with modern technology to deliver measurable results. Our impact spans across rural communities, improving livelihoods and promoting climate-smart practices. Through strong partnerships with NGOs, research institutions, and local cooperatives, we are building a more inclusive and prosperous agricultural ecosystem.`,
  features = [
    "Vision: A future of food-secure, self-reliant farming communities.",
    "Mission: Empowering farmers through education, technology, and opportunity.",
    "Leadership: Guided by experienced agri-professionals and community champions.",
    "Impact: Supporting thousands of farmers and transforming rural economies.",
    "Partnerships: Collaborating with NGOs, research bodies, and cooperatives.",
  ],
  backgroundImage = IMAGE_PATHS.aboutBg,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="relative px-4 py-20 bg-center bg-cover"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="bg-[#f9f9f9] bg-opacity-95 rounded-xl shadow-lg max-w-6xl mx-auto p-6 md:p-12 text-[#143C2F] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-right md:text-4xl">
            {title}
          </h2>
          <p className="mb-6 text-base whitespace-pre-line md:text-lg">
            {description}
          </p>
          <ul className="pl-5 space-y-2 text-base list-disc">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Right: Visual Content */}
        <div className="flex items-center justify-center w-full h-full">
          {/* Option 1: Static Image */}
          <img
            src="/images/Logo.webp"
            alt="About Glorious Integrated Farming"
            className="h-auto max-w-full rounded-lg shadow-lg"
          />

          {/* Option 2 (Alternative): Add video thumbnail or stats here */}
          {/* <div className="text-center">
            <h3 className="mb-2 text-2xl font-semibold">5,000+ Farmers Impacted</h3>
            <p>Across 20+ communities and growing</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
