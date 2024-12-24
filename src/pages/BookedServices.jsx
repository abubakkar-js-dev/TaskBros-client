import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authcontext/AuthContext";
import BookedService from "../components/common/BookedService";
import { Helmet } from "react-helmet-async";

const BookedServices = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/booked-services?email=${user.email}`
      )
      .then((res) => setBookedServices(res.data));
  }, [user.email]);

  return (
    <div className="section-wrap container mx-auto mt-20">
      <Helmet>
        <title>Booked Services - TaskBros | Your Bookings</title>
      </Helmet>
      {/* Title Section */}
      <div className="mb-16 text-center">
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
            Booked Services
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>

        <h2 className="text-gray-900 text-3xl font-semibold leading-snug">
          Your Booked Services
        </h2>
      </div>

      {/* booked information table */}
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          {bookedServices.length === 0 || bookedServices.length < 0 ? (
            <h2 className="text-center mt-20 text-xl lg:text-2xl text-secondary">
              No Services Booked
            </h2>
          ) : (
            <table className="table-auto w-full border-collapse border border-gray-200 text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">
                    Service Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Address</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookedServices.map((service) => (
                  <BookedService key={service._id} service={service} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookedServices;
