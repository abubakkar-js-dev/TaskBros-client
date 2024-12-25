import { FaUser, FaSearch, FaHandshake, FaSmile } from "react-icons/fa";

const HowItWork = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "Create an Account",
      description: "Sign up and set up your profile to get started.",
    },
    {
      icon: <FaSearch />,
      title: "Search for Services",
      description: "Browse available services or providers in your area.",
    },
    {
      icon: <FaHandshake />,
      title: "Connect & Book",
      description: "Contact providers and book services with ease.",
    },
    {
      icon: <FaSmile />,
      title: "Enjoy the Experience",
      description: "Relax and let our professionals handle the task!",
    },
  ];

  return (
    <div className="section-wrap container mx-auto mb-24 lg:mb-[120px]">
      <div className="mb-24 mx-auto text-center flex flex-col justify-center items-center">
        {/* title section */}
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
          How It Works
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="section-title text-gray-900">
        Simple steps to get started effortlessly
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg"
          >
            <div className="text-4xl text-primary mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
