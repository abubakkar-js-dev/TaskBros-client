import { useContext, useState } from "react";
import AuthContext from "../contexts/authcontext/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [serviceData, setServiceData] = useState({
    imageUrl: "",
    name: "",
    price: "",
    area: "",
    description: "",
  });
  const axiosInstant = useAxiosSecure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      displayName: provider_name,
      email: provider_email,
      photoURL: provider_img,
    } = user;
    const priceNum = parseFloat(serviceData.price);
    const newService = {
      ...serviceData,
      price: priceNum,
      provider_name,
      provider_email,
      provider_img,
    };

    // console.log(newService);
    // add service to the database
    axiosInstant
      .post(`/add-service`, newService)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully added your service!");

          // Clear the form
          setServiceData({
            imageUrl: "",
            name: "",
            price: "",
            area: "",
            description: "",
          });
        }
      })
      .catch((err) => {
        toast.error("Failed to add service", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Add Service - TaskBros | Share Your Expertise</title>
      </Helmet>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Add New Service
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Image URL */}
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-600 font-medium mb-2"
            >
              Image URL of the Service
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={serviceData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="off"
            />
          </div>

          {/* Service Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Service Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={serviceData.name}
              onChange={handleChange}
              placeholder="Enter service name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="off"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-600 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={serviceData.price}
              onChange={handleChange}
              placeholder="Enter service price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="off"
            />
          </div>

          {/* Service Area */}
          <div className="mb-4">
            <label
              htmlFor="area"
              className="block text-gray-600 font-medium mb-2"
            >
              Service Area
            </label>
            <input
              type="text"
              id="area"
              name="area"
              value={serviceData.area}
              onChange={handleChange}
              placeholder="Enter service area"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="off"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={serviceData.description}
              onChange={handleChange}
              placeholder="Enter service description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
              autoComplete="off"
            ></textarea>
          </div>

          {/* Add Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
