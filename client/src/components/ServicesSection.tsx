import { services } from "../types/service";

function ServicesSection() {
  return (
    <section className="bg-[#143C2F] py-20 px-4 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">OUR SERVICES</h2>
        <p className="max-w-2xl mx-auto mb-10">
          Glorious Integrated Farming offers comprehensive agricultural
          solutions to support and expand your farming enterprise.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#1e5643] rounded-lg p-6 shadow-lg hover:scale-[1.02] transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 mx-auto mb-4 w-30"
              />
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
