import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authcontext/AuthContext";

const BookingModal = ({service}) => {
  const [openModal, setOpenModal] = useState(false);
  const {user} = useContext(AuthContext);
  const {
    _id,
    description,
    imageUrl,
    name,
    price,
    provider_name,
    provider_img,
    provider_email,
    area,
  } = service;

  const {displayName: booking_provider,email: booking_provider_email} = user;
  console.log(booking_provider_email,booking_provider);




  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);



  return (
    <div className="w-72 mx-auto flex items-center justify-center">
      {/* Pay Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Book Now
      </button>
      <div
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } duration-300 inset-0 w-full h-full`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-32 opacity-0 duration-100"
          }`}
        >
          <main className="px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
            >
              Close
            </button>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                    <h3 className="text-2xl font-semibold whitespace-nowrap">
                      Service Details
                    </h3>
                  </div>
                  <div className="lg:p-6 p-2">
                    {/* services Details form */}
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-left">Service Id</label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          defaultValue={_id}
                          type="text"
                          disabled
                          name="_id"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Service Name</label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          type="text"
                          defaultValue={name}
                          name="name"
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Service Image URL</label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          type="text"
                          defaultValue={imageUrl}
                          name="imageUrl"
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Provider Email</label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          type="email"
                          defaultValue={provider_email}
                          name="provider_email"
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Provider Name</label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          type="email"
                          defaultValue={provider_name}
                          name="provider_name"
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Service Price</label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          type="text"
                          defaultValue={price}
                          disabled
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="rounded-lg border bg-card  shadow-sm self-start">
                  <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                    <h3 className="text-2xl font-semibold whitespace-nowrap">
                      User Information
                    </h3>
                  </div>
                  <div className="lg:p-6 p-2">
                    {/* Personal Information details form */}
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">
                          Current User Email
                        </label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          type="email"
                          defaultValue={booking_provider_email}
                          disabled
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none">
                            Expiry Date
                          </label>
                          <input
                            className="bg-transparent flex h-10 w-full rounded-md border px-3"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none">
                            CVV
                          </label>
                          <input
                            className="bg-transparent flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your CVV"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">
                          Billing Address
                        </label>
                        <input
                          className="bg-transparent flex h-10 w-full rounded-md border px-3"
                          placeholder="Enter your billing address"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-center lg:p-6 p-2">
                  <button
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Conform
                  </button>
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
BookingModal.propTypes = {
  service: PropTypes.object.isRequired,
};

export default BookingModal;
