function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Top-notch website design and development tailored to the agricultural sector.",
      icon: "🌐",
    },
    {
      title: "Farm Management Software",
      description:
        "Advanced software for efficient farm operations and management.",
      icon: "🧑‍🌾",
    },
    {
      title: "Digital Marketing",
      description:
        "Innovative strategies to enhance your online presence and reach.",
      icon: "📣",
    },
  ];

  return (
    <section className="bg-[#143C2F] py-20 px-4 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
        <p className="mb-10 max-w-2xl mx-auto">
          Glorious Integrated Farming offers comprehensive agricultural
          solutions to support and expand your farming enterprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#1e5643] rounded-lg p-6 shadow-lg hover:scale-[1.02] transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
