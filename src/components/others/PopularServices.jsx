import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../common/ServiceCard";

const PopularServices = () => {
    const [popularServices,SetPopularServices] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/popular-services`)
        .then(res =>{
            SetPopularServices(res.data);
        })
    },[])
    console.log(popularServices);
  return (
    <div className="section-wrap container mx-auto p-4">
      <div className="mb-24">
        {/* title section */}
        <h4 className="flex items-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
           Popular now
          </span>
        </h4>
        <h2 className="section-title text-gray-900">
          Discover the most sought-after services
        </h2>
      </div>
      {/* card container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center max-w-5xl mx-auto">
        {
            popularServices.map(service=> <ServiceCard key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default PopularServices;
