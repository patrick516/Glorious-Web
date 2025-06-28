import React from "react";
import {
  impactStats,
  transformationStories,
  testimonials,
} from "../../data/impactData";

export default function Impact() {
  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="mb-6 text-4xl font-bold text-center">Our Impact</h2>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-6 mb-12 text-center sm:grid-cols-3">
        {impactStats.map(({ id, stat, description }) => (
          <div key={id} className="p-4 border rounded shadow-md">
            <p className="text-5xl font-extrabold text-green-700">{stat}</p>
            <p className="mt-2 text-gray-700">{description}</p>
          </div>
        ))}
      </section>

      {/* Transformation Stories */}
      <section className="mb-12">
        <h3 className="mb-4 text-3xl font-semibold text-center">
          Transformation Stories
        </h3>
        <div className="space-y-12">
          {transformationStories.map(
            ({ id, title, beforeImage, afterImage, story }) => (
              <div
                key={id}
                className="flex flex-col items-center md:flex-row md:space-x-8"
              >
                <div className="w-full md:w-1/3">
                  <img
                    src={beforeImage}
                    alt={`${title} - Before`}
                    className="mb-2 rounded shadow-md"
                  />
                  <p className="text-sm text-center text-gray-600">Before</p>
                </div>
                <div className="w-full md:w-1/3">
                  <img
                    src={afterImage}
                    alt={`${title} - After`}
                    className="mb-2 rounded shadow-md"
                  />
                  <p className="text-sm text-center text-gray-600">After</p>
                </div>
                <p className="mt-4 text-gray-800 md:mt-0 md:w-1/3">{story}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h3 className="mb-6 text-3xl font-semibold text-center">
          Testimonials
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map(({ id, farmerName, quote, photo }) => (
            <div
              key={id}
              className="flex items-center p-4 space-x-4 border rounded shadow-md"
            >
              <img
                src={photo}
                alt={`Photo of ${farmerName}`}
                className="object-cover w-20 h-20 rounded-full"
              />
              <div>
                <p className="italic text-gray-700">“{quote}”</p>
                <p className="mt-2 font-semibold text-green-700">
                  {farmerName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
