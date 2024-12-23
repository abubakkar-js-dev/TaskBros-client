import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const UpdateServiceModal = ({ service, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(service || {});
  const {
    description,
    imageUrl,
    name,
    price,
    area,
  } = service;
  console.log(service.area);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(()=>{
    if(isOpen){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow ="auto";
    }

    return ()=>{
        document.body.style.overflow="auto";
    }

  },[isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Pass updated data to parent
    closeModal();
  };



  return (
    <div>
      {/* Edit Button */}
      <button
        onClick={openModal}
        className="bg-[#4A90E2] hover:bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
        title="Edit Service"
      >
        <FaRegEdit className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Modal Content */}
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 id="modal-title" className="text-lg font-semibold text-gray-800">
                Update Service
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="py-4">
              <div className="mb-4">
                <label
                  htmlFor="imageUrl"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Service Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={imageUrl || ""}
                  onChange={handleChange}
                  placeholder="Enter service name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>
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
                  value={name || ""}
                  onChange={handleChange}
                  placeholder="Enter service name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>

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
                  value={price || ""}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="area"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={area || ""}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>

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
                  value={description || ""}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  autoComplete="off"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

UpdateServiceModal.propTypes={
    service: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
}

export default UpdateServiceModal;
