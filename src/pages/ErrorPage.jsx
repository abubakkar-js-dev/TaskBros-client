import React from "react";
import { FaHome } from "react-icons/fa";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import loginLotte from "../assets/lottie/login-lottie.json";

const ErrorPage = () => {
  const navigate = useNavigate(); // Use React Router's navigate function

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginLotte,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home route
  };

  return (
    <div className="grid h-screen place-content-center bg-gray-100 px-4">
      <div className="text-center">
        <Lottie options={defaultOptions} height={300} width={300} />
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaHome className="mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
