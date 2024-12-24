import PropTypes from "prop-types";
import {useNavigate} from 'react-router-dom'

const BookedService = ({ service }) => {
  const navigate = useNavigate();
    const { service_name, service_price, bookingInfo, service_status,service_id } = service;
    const { booking_address, booking_date } = bookingInfo;

  
    return (
      <tr>
        <td className="border border-gray-300 px-4 py-2">{service_name}</td>
        <td className="border border-gray-300 px-4 py-2">${service_price}</td>
        <td className="border border-gray-300 px-4 py-2">
          {booking_address || 'N/A'}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          {new Date(booking_date).toLocaleString()}
        </td>
        <td className="border border-gray-300 px-4 py-2 capitalize">
          {service_status}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            className="bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded text-sm"
            onClick={()=> navigate(`/services/${service_id}`)}
          >
            View Details
          </button>
        </td>
      </tr>
    );
  };

  BookedService.propTypes={
    service: PropTypes.object.isRequired,
  }
  
  export default BookedService;