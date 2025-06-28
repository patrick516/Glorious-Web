import { boardData } from "../../../data/boardData";

export default function Board() {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">Board & Advisors</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {boardData.map(
          ({
            id,
            name,
            role,
            credentials,
            contribution,
            photoPath,
            bio,
            quote,
            expertiseAreas,
            organization,
            linkedin,
          }) => (
            <div
              key={id}
              className="flex flex-col p-6 text-left bg-white rounded-lg shadow"
            >
              <img
                src={photoPath}
                alt={`Photo of ${name}`}
                className="object-cover w-full h-56 mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="font-medium text-green-700">{role}</p>
              <p className="text-sm text-gray-600">{organization}</p>
              <p className="mt-2 text-gray-700">{credentials}</p>
              <p className="mt-2 text-gray-800">{bio}</p>
              <p className="mt-2 text-sm italic text-gray-600">
                {contribution}
              </p>
              {quote && (
                <blockquote className="px-4 py-2 mt-2 text-sm italic text-green-800 border-l-4 border-green-500 rounded-md bg-green-50">
                  “{quote}”
                </blockquote>
              )}
              {expertiseAreas && (
                <>
                  <h4 className="mt-3 text-sm font-semibold">Expertise:</h4>
                  <ul className="ml-4 text-sm text-gray-600 list-disc">
                    {expertiseAreas.map((area, idx) => (
                      <li key={idx}>{area}</li>
                    ))}
                  </ul>
                </>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-blue-600 underline hover:text-blue-800"
                >
                  View LinkedIn
                </a>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
