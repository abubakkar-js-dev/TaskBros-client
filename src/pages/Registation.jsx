import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/authcontext/AuthContext";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: null };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { first_name, last_name, email, password, photo_url } = data;
    const full_name = `${first_name} ${last_name}`;

    console.table({ full_name, email, password, photo_url });

    createUser(email, password)
      .then((result) => {
        console.log("User created successfully");
        setUser(result.user);
        updateUserProfile({ displayName: full_name, photoURL: photo_url })
          .then(() => {
            console.log("Profile updated successfully");
            navigate(from || "/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <Helmet>
        <title>Register - TaskBros | Join the Platform</title>
      </Helmet>
      <div className="max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg ">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-800">
            Sign Up
          </h3>
          <p className="text-sm text-zinc-500 ">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 "
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 "
                  id="first_name"
                  placeholder="Enter first name"
                  name="first_name"
                  type="text"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 "
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 "
                  id="last_name"
                  placeholder="Enter last name"
                  name="last_name"
                  type="text"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 "
                id="email"
                placeholder="Enter your email"
                name="email"
                type="email"
                autoComplete="off"
                required
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 "
                htmlFor="password_"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 "
                id="password_"
                placeholder="password"
                name="password"
                type="password"
                autoComplete="off"
                required
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 "
                htmlFor="photo_url"
              >
                Photo URL
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 "
                id="photo_url"
                placeholder="Enter photo URL"
                name="photo_url"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <input
              type="submit"
              className="btn transition-colors hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 "
              value="Register"
            />
            <p className="text-sm text-center text-zinc-600 ">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-500 hover:underline focus:outline-none"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
