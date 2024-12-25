import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logoFooter from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container max-w-7x mx-auto py-12 px-8 md:px-16 flex flex-col items-center justify-between gap-10 md:flex-row md:gap-20 border-b border-gray-300 bg-gray-50 rounded-t-3xl">
        <div className="flex flex-co  items-center gap-6">
          <img
            src={logoFooter}
            alt="TaskBros Logo"
            className="w-16  bg-primary/20 p-2 rounded-full shadow-md"
          />
          <h5 className="text-2xl font-semibold text-primary">TaskBros</h5>
        </div>

        <div className="flex gap-6 justify-center text-lg ">
          <Link
            to="/"
            className="text-base text-gray-600 hover:text-primary transform hover:scale-110 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/all-services"
            className="text-base text-gray-600 hover:text-primary transform hover:scale-110 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/add-service"
            className="text-base text-gray-600 hover:text-primary transform hover:scale-110 transition duration-200"
          >
            Add service
          </Link>

        </div>

        <nav className="text-lg">
          <ul className="flex gap-6 justify-center">
            <li className="cursor-pointer hover:text-blue-500  transform hover:scale-125 transition duration-200">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 transform hover:scale-125 transition duration-200">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 transform hover:scale-125 transition duration-200">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <aside className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-6 text-center text-sm">
        <p className="text-gray-700">
          &copy; 2024 TaskBros. All Rights Reserved.
        </p>
        <p className="text-gray-500 mt-2">
          Your trusted task management platform
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
