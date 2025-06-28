import { staffData } from "../../../data/staffData";

export default function Staff() {
  return (
    <div className="max-w-5xl p-4 mx-auto">
      <h2 className="mb-5 text-3xl font-bold text-center">Our Team</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {staffData.map(
          ({ id, name, role, background, expertise, photoPath }) => (
            <div key={id} className="p-6 text-left bg-white rounded-lg shadow">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src={photoPath}
                  alt={`Photo of ${name}`}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-medium text-green-700">{role}</p>
              <p className="mt-2 text-gray-700">{background}</p>
              <h4 className="mt-2 font-semibold">Areas of Expertise:</h4>
              <ul className="text-gray-600 list-disc list-inside">
                {expertise.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
