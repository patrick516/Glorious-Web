import { historyData } from "../../data/historyData";

function History() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-3xl font-bold">Our History</h2>

      {/* Evolution Section */}
      <section className="mt-6">
        <h3 className="mb-4 text-xl font-semibold">Key Milestones</h3>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {historyData.milestones.map((m) => (
            <div
              key={m.year}
              className="p-4 text-left bg-white rounded-md shadow"
            >
              <img
                src="/images/consultancy.webp"
                alt={`${m.title} image`}
                className="object-cover w-full h-48 mb-3 rounded-md"
              />
              <strong className="block text-lg">
                {m.year} - {m.title}:
              </strong>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default History;
