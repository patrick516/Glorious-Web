import { missionVisionData } from "../../data/missionData";
import { FaLeaf, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";

const iconMap = {
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaLightbulb: FaLightbulb,
  FaLeaf: FaLeaf,
};

export default function Mission() {
  return (
    <div className="max-w-5xl p-4 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">
        Our Mission & Vision
      </h2>

      <div className="grid gap-6 mb-10 text-left md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Mission</h3>
          <p className="text-gray-700">{missionVisionData.mission}</p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Vision</h3>
          <p className="text-gray-700">{missionVisionData.vision}</p>
        </div>
      </div>

      <blockquote className="pl-4 mb-10 italic text-gray-600 border-l-4 border-green-600">
        {missionVisionData.founderQuote}
      </blockquote>

      <div className="grid gap-6 mb-12 text-center sm:grid-cols-1 md:grid-cols-3">
        {missionVisionData.pillars.map(({ icon, title, description }) => {
          const IconComponent = iconMap[icon];
          return (
            <div key={title} className="flex flex-col items-center">
              {IconComponent && (
                <IconComponent size={40} className="mb-2 text-green-700" />
              )}
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {missionVisionData.images.map(({ description, path }) => (
          <img
            key={description}
            src={path}
            alt={description}
            className="object-cover w-full h-64 rounded-md shadow"
          />
        ))}
      </div>
    </div>
  );
}
