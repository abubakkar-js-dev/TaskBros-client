import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const {
    _id,
    description,
    imageUrl,
    name,
    price,
    provider_name,
    provider_img,
    area,
  } = service;
  const location = useLocation();

  return (
    <div className="border shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col ">
      {/* Image Section */}
      <div className="relative">
        <img
          className={`w-full object-cover ${
            location.pathname === "/all-services" ? "h-[420px]" : "h-64"
          }`}
          src={imageUrl}
          alt={name}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-6 space-y-4">
        {/* Title and Provider Info */}
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h3 className="text-sm text-gray-500 italic">From:</h3>
                <h3 className="text-sm text-gray-700">{provider_name}</h3>
              </div>
              <img
                className="rounded-full w-10 h-10 border object-cover"
                src={provider_img}
                alt={`Service provider ${provider_name}`}
              />
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
        </div>

        {/* Price And area */}
        <div className="flex justify-between">
          <div className="text-lg font-medium text-gray-800">
            <span className="text-gray-500">Price:</span> ${price}
          </div>
          {location.pathname === "/all-services" && (
            <div className="text-base font-medium text-gray-600">
              <span className="text-gray-600">Location:</span>
              {area}
            </div>
          )}
        </div>

        {/* Action btn */}
        <div className="mt-auto">
          {location.pathname === "/manage-services" ? (
            <div className="flex justify-between space-x-2">
              <button
                className="bg-[#4A90E2] hover:bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
                title="Edit Service"
              >
                <FaRegEdit className="w-6 h-6" />
              </button>
              <button
                className="bg-[#F97316] hover:bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
                title="Delete Service"
              >
                <BsFillTrash3Fill className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <Link
              to={`/services/${_id}`}
              className="text-center px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-md transition-colors duration-200 inline-block"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
