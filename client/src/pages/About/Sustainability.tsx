import { sustainabilityData } from "../../data/sustainabilityData";

export default function Sustainability() {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">Sustainability</h2>
      <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
        Our commitment to sustainability ensures long-term food security,
        climate resilience, and community empowerment.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {sustainabilityData.map(({ id, title, description, imagePath }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-6 p-6 bg-white shadow rounded-xl sm:flex-row"
          >
            <img
              src={imagePath}
              alt={title}
              className="object-cover w-full h-40 rounded-lg sm:w-40"
            />
            <div>
              <h3 className="mb-1 text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
