const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      name: "Plumbing Assistance",
      description: "Expert plumbing at your doorstep.",
      price: "$50/hour",
    },
    {
      id: 2,
      name: "Electrician On-Demand",
      description: "Get your electrical issues fixed.",
      price: "$60/hour",
    },
    {
      id: 3,
      name: "Home Cleaning",
      description: "Affordable and professional cleaning services.",
      price: "$40/hour",
    },
    // {
    //   id: 4,
    //   name: "Graphic Design",
    //   description: "Top-tier designs tailored for you.",
    //   price: "$70/project",
    // },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mb-16">
      <div className="mb-24 mx-auto text-center flex flex-col justify-center items-center">
        {/* title section */}
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
          Featured Services
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="section-title text-gray-900">
          Find the most in-demand services
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg flex flex-col"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {service.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            <p className="mt-4 text-lg font-bold text-primary flex-1">
              {service.price}
            </p>
            <button className="mt-4 inline-block w-full rounded bg-secondary px-4 py-2 text-white hover:bg-orange-500">
              Explore More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
