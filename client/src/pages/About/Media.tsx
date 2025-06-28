import { awards, mediaFeatures } from "../../data/mediaData";

export default function MediaAwards() {
  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Media & Awards</h2>

      {/* Awards Section */}
      <section className="mb-12">
        <h3 className="mb-4 text-2xl font-semibold">Awards & Recognition</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex items-center gap-4 p-4 bg-white shadow rounded-xl"
            >
              <img
                src={award.imagePath}
                alt={award.title}
                className="object-cover w-24 h-24 rounded-md"
              />
              <div>
                <h4 className="text-lg font-bold">
                  {award.title} ({award.year})
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section>
        <h3 className="mb-4 text-2xl font-semibold">Media Features</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {mediaFeatures.map((media) => (
            <div key={media.id} className="p-4 bg-white shadow rounded-xl">
              {media.type === "video" ? (
                <video
                  controls
                  className="w-full mb-3 rounded-md"
                  src={media.source}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <a
                  href={media.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={media.thumbnail}
                    alt={media.title}
                    className="object-cover w-full h-48 mb-3 rounded-md"
                  />
                </a>
              )}
              <h4 className="text-lg font-bold">{media.title}</h4>
              <p className="mt-1 text-sm text-gray-600">{media.description}</p>
              {media.type === "article" && (
                <a
                  href={media.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-green-700 underline"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
