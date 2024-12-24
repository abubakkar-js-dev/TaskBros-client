import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../components/common/ServiceCard";

const AllServices = () => {
    const [allServices,setAllServices] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/all-services`)
        .then(res=>{
            setAllServices(res.data);
        })
    },[])
    console.log('all',allServices)
  return (
    <div className="section-wrap p-4 max-w-7xl mx-auto mt-16">
        {/* Title Section */}
      <div className="mb-16 text-center">
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
            All Services
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="text-gray-900 text-4xl font-semibold leading-snug">
          Explore Our Available Services
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          About the service and its provider
        </p>
      </div>

      {/*services Card section */}
      <div className="space-y-10">
        {allServices.map((service,idx)=> <ServiceCard key={`${service._id}-${idx}`} service={service} />)}
      </div>
    </div>
  );
};

export default AllServices;
