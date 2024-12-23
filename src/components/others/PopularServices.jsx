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
    <div className="section-wrap container mx-auto">
      <div className="mb-24">
        {/* title section */}
        <h4 className="flex gap-3 items-center">
          <span className="border-t-2 border-gray-300 w-10 h-2"></span>
          <span className="section-subtitle text-gray-400">Popular Now</span>
        </h4>
        <h2 className="section-title text-gray-900">
          Discover the most sought-after services
        </h2>
      </div>
      {/* card container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
        {
            popularServices.map(service=> <ServiceCard key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default PopularServices;
