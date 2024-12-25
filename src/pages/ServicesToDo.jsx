import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../contexts/authcontext/AuthContext";
import axios from "axios";
import Toast from "react-hot-toast";

const ServicesToDo = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
   
    axios
      .get(`${import.meta.env.VITE_API_URL}/booked-by-user?email=${user.email}`)
      .then((res) => setBookedServices(res.data));
  }, [user.email]);

  const handleUpdateStatus = (status, id) => {
    // console.log(id, status);
    axios
      .patch(`${import.meta.env.VITE_API_URL}/update-booking-status/${id}`, {
        status,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Toast.success("Successfully updated your service Status!");

          // update in state
          setBookedServices((prevServices) =>
            prevServices.map((service) =>
              service._id === id
                ? { ...service, service_status: status }
                : service
            )
          );
        } else {
          Toast.error("Failed to updated status");
        }
      });
  };

  return (
    <div className="mt-16 lg:mt-20 container mx-auto section-wrap">
      <Helmet>
        <title>Services To Do - TaskBros | Manage Your Services</title>
      </Helmet>

      {/* Title Section */}
      <div className="mb-16 text-center">
        <h4 className="flex items-center justify-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
            Service To Do
          </span>
          <span className="border-t-2 border-gray-300 w-10"></span>
        </h4>
        <h2 className="text-gray-900 text-2xl lg:text-3xl font-semibold leading-snug">
          Manage Your Booked Services
        </h2>
      </div>

      {/* Table Section */}
      {bookedServices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Service Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Booked By</th>
                <th className="border border-gray-300 px-4 py-2">
                  Booking Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookedServices.map((service) => (
                <tr key={service._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={service.service_img}
                        alt={service.service_name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <span>{service.service_name}</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {service.bookingInfo.booking_person_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(
                      service.bookingInfo.booking_date
                    ).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {service.bookingInfo.booking_address || "Unknown"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`${
                        service.service_status === "pending"
                          ? "text-yellow-500"
                          : service.service_status === "working"
                          ? "text-blue-500"
                          : "text-green-500"
                      }`}
                    >
                      {service.service_status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      value={service.service_status}
                      className="border border-gray-300 rounded px-2 py-1"
                      onChange={(e) =>
                        handleUpdateStatus(e.target.value, service._id)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          No services booked yet. Start adding your services to get started!
        </p>
      )}
    </div>
  );
};

export default ServicesToDo;
