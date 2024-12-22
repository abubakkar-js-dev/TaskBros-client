import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import logoNav from "../../assets/images/logo2.png";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropDownMenuRef = useRef();
  const location = useLocation();
  const user = true;

  // State and ref for the dashboard dropdown menu
  const [dropDownDashState, setDropDownDashState] = useState(false);
  const dropDownMenuDashRef = useRef();

  // for mobile dashboard dropdown menu
  const [dropDownDashMobileState, setDropDownDashMobileState] = useState(false);
  const mobileDropdwnDashRef = useRef();
  

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    // document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    }

  }, []);

  useEffect(() => {
    const closeDropDownDash = (e) => {
      if (
        dropDownMenuDashRef.current &&
        !dropDownMenuDashRef.current.contains(e.target)
      ) {
        setDropDownDashState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDownDash);
    return () => {
      document.removeEventListener("mousedown", closeDropDownDash);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };


  return (
    <nav className="relative flex items-center justify-between bg-primary px-4 py-2 text-white pt-4">
      {/* Left Section: Logo and Website Name */}
      <div className="flex items-center gap-3">
        <Link to="/" className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110 flex items-center gap-2">
          <img
            className="w-10 h-10 bg-white rounded-full object-cover"
            src={logoNav}
            alt="logo img"
          />
          <h2 className="text-2xl">TaskBros</h2>
        </Link>
      </div>

      {/* Center Section: Desktop Menu */}
      <ul className="hidden items-center justify-center gap-10 md:flex">
        <li>
          <NavLink
            to="/"
            className="group flex flex-col cursor-pointer text-white"
          >
            Home
            <span
              className={`mt-[2px] h-[3px] rounded-full bg-secondary/90 transition-all duration-300 ${
                location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-services"
            className="group flex flex-col cursor-pointer text-white"
          >
            Services
            <span
              className={`mt-[2px] h-[3px] rounded-full bg-secondary/90 transition-all duration-300 ${
                location.pathname === "/all-services"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </NavLink>
        </li>
        {/* Dashboard dropdown menu */}
        {user && (
          <li className="relative" ref={dropDownMenuDashRef}>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior
                setDropDownDashState(!dropDownDashState);
              }}
              className={`group flex items-center gap-2 py-2 px-3 cursor-pointer text-white`}
            >
              <span>Dashboard</span>
              <svg
                className={`transition-transform duration-300 ${
                  dropDownDashState ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              {/* Hover effect underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ${
                  dropDownDashState ? "w-1/2" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>

            {/* Dropdown Menu */}
            {dropDownDashState && (
              <ul className="absolute left-0 top-10 z-10 w-48 rounded-lg bg-white shadow-lg p-4 space-y-2 text-black">
                <li>
                  <NavLink
                    to="/add-service"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded hover:bg-primary/70 transition-all duration-300 ${
                        isActive ? "bg-secondary text-white" : ""
                      }`
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manage-services"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded hover:bg-primary/70 transition-all duration-300 ${
                        isActive ? "bg-secondary text-white" : ""
                      }`
                    }
                  >
                    Manage Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/booked-services"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded hover:bg-primary/70 transition-all duration-300 ${
                        isActive ? "bg-secondary text-white" : ""
                      }`
                    }
                  >
                    Booked Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service-to-do"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded hover:bg-primary/70 transition-all duration-300 ${
                        isActive ? "bg-secondary text-white" : ""
                      }`
                    }
                  >
                    Service To Do
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>

      {/* Right Section: Dark/Light Mode Toggle & Login/Logout */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full p-2 text-white hover:bg-secondary/60 bg-gray-800/50"
        >
          {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </button>
        {user ? (
          <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold hover:bg-secondary/90">
            LogOut
          </button>
        ) : (
          <Link className="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold hover:bg-secondary/90">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex md:hidden"
      >
        <FaBars className="cursor-pointer" size={24} />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute right-0 top-20 w-full overflow-hidden bg-primary text-white transition-all duration-500 ease-in-out ${
          dropDownState ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-6 py-2 ${
                  isActive ? "bg-secondary text-white" : "hover:bg-sky-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-services"
              className={({ isActive }) =>
                `block px-6 py-2 ${
                  isActive ? "bg-secondary text-white" : "hover:bg-sky-600"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          {/* Mobile Dashboard Dropdown */}
          {user && (
            <li className="relative" ref={mobileDropdwnDashRef}>
              <button
                onClick={() =>{
                  // e.stopPropagation()
                  setDropDownDashMobileState(!dropDownDashMobileState)
                } }
                className="flex items-center gap-2 px-6 py-2 cursor-pointer text-white"
              >
                Dashboard
                <svg
                  className={`transition-transform duration-300 ${
                    dropDownDashMobileState ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>

              {dropDownDashMobileState && (
                <ul className="flex flex-col px-6 py-2 text-black space-y-2 ">
                  <li>
                    <NavLink
                      to="/add-service"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-secondary/80 transition-all duration-300 text-white ${
                          isActive ? "bg-secondary text-white" : ""
                        }`
                      }
                    >
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manage-services"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-secondary/80 transition-all duration-300 text-white ${
                          isActive ? "bg-secondary text-white" : ""
                        }`
                      }
                    >
                      Manage Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/booked-services"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-secondary/80 transition-all duration-300 text-white ${
                          isActive ? "bg-secondary text-white" : ""
                        }`
                      }
                    >
                      Booked Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service-to-do"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-secondary/80 transition-all duration-300 text-white ${
                          isActive ? "bg-secondary text-white" : ""
                        }`
                      }
                    >
                      Service To Do
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
