import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ServiceCard from "../components/common/ServiceCard";
import AuthContext from "../contexts/authcontext/AuthContext";

const ManageServices = () => {
    const [allServices,setAllServices] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/my-services/${user.email}`)
        .then(res=>{
            setAllServices(res.data);
        })
    },[user.email]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map(service=> <ServiceCard key={service._id} service={service} />)}
      </div>
    </div>
  );
};

export default ManageServices;
