import { partnersData } from "../../data/partnersData";

export default function Partners() {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">Our Partners</h2>
      <p className="mb-10 text-center text-gray-600">
        We work with organizations committed to sustainable agriculture,
        innovation, and farmer empowerment.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partnersData.map(
          ({ id, name, logoPath, type, description, website }) => (
            <div
              key={id}
              className="flex flex-col p-6 bg-white rounded-lg shadow"
            >
              <img
                src={logoPath}
                alt={`Logo of ${name}`}
                className="object-contain w-full h-24 mb-4 bg-gray-100 rounded-md"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-1 text-sm font-medium text-green-700">
                {type} Partner
              </p>
              <p className="mt-2 text-sm text-gray-700">{description}</p>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Visit Website
                </a>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
