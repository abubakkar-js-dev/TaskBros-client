import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const {
    description,
    imageUrl,
    name,
    price,
    provider_name,
    provider_img,
    area,
  } = service;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/all-services/${id}`)
      .then((res) => setService(res.data));
  }, [id]);

  const handleBooking = () => {
    // Booking logic here
    console.log("Booking service:", service);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Title Section */}
      <div className="mb-16 text-center">
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
            Service Details
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="text-gray-900 text-4xl font-semibold leading-snug">
          Discover Comprehensive Information
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          About the service and its provider
        </p>
      </div>

      {/* Service Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        {/* Service Image */}
        <img
          className="w-full md:w-1/2 h-96 object-cover"
          src={imageUrl}
          alt={name}
        />

        {/* Service Information */}
        <div className="p-6 flex-1">
          {/* Service Name */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{name}</h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* Service Location */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-600 font-medium">Location:</span>
            <span className="text-lg font-semibold text-gray-800">{area}</span>
          </div>

          {/* Price */}
          <h3 className="text-xl font-semibold text-orange-600 mb-6">
            Price: ${price}
          </h3>

          {/* Service Provider Information */}
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full border object-cover"
              src={provider_img}
              alt={`Provider ${provider_name}`}
            />
            <div>
              <h4 className="text-gray-700 font-semibold">{provider_name}</h4>
              <p className="text-sm text-gray-500">Service Provider</p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="text-center">
        <button
          onClick={handleBooking}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
