import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/common/ServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/all-services`).then((res) => {
      setAllServices(res.data);
    });
  }, [search]);

  const handleSearch = (e)=>{
    e.preventDefault();
    axios.get(`${import.meta.env.VITE_API_URL}/all-services?search=${search}`)
    .then(res=>{
      setAllServices(res.data);
    })
  }
  return (
    <div className="section-wrap p-4 max-w-7xl mx-auto mt-16">
      <Helmet>
        <title>All Services - TaskBros | Browse Services</title>
      </Helmet>
      {/* Title Section */}
      <div className="mb-16 text-center">
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
            All Services
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="text-gray-900 text-2xl lg:text-3xl font-semibold leading-snug">
          Explore Our Available Services
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          About the service and its provider
        </p>
      </div>

      {/*services Card section */}
      <div className="space-y-10">
        <div className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e)=> setSearch(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-50 focus:outline-primary/30 "
              placeholder="Search Services..."
              required
            />
            <button
              onClick={handleSearch}
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  "
            >
              Search
            </button>
          </div>
        </div>

        {allServices.map((service, idx) => (
          <ServiceCard key={`${service._id}-${idx}`} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
