import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ServiceCard from "../components/common/ServiceCard";
import AuthContext from "../contexts/authcontext/AuthContext";
import { useLocation } from "react-router-dom";

const ManageServices = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/my-services/${user.email}`)
      .then((res) => {
        setMyServices(res.data);
      });
  }, [user.email]);

  // updated my services in state
  const updateServicesInState = (updatedService) => {
    myServices.map((service) => {
      service._id === updatedService._id ? updatedService : service;
    });
  };

  return (
    <div className="section-wrap container mx-auto mt-16">
      {/* Title Section */}
      <div className="mb-16 text-center">
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
            Manage Services
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="text-gray-900 text-4xl font-semibold leading-snug">
          Control and Customize Your Services
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Effortlessly manage services and ensure efficiency
        </p>
      </div>

      {/*services Card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {myServices.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            updateServicesInState={updateServicesInState}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
