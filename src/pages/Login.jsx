import { useContext } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/authcontext/AuthContext";
import { Helmet } from "react-helmet-async";
import Toast from "react-hot-toast";

const Login = () => {
  const { loginUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { from } = location.state || { from: null };
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from || "/");
      })
      .catch((err) => {
        Toast.error(err.code);
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        Toast.error(err.code);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Helmet>
        <title>Login - TaskBros | Access Your Account</title>
      </Helmet>
      <div className="w-full max-w-sm rounded bg-white p-6 sm:p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Sign In
          </h2>

          <div className="space-y-2">
            <label
              htmlFor="nui_email"
              className="block text-gray-700 font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="nui_email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="h-10 w-full rounded border border-gray-300 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="off"
              />
              <span className="absolute left-2 top-2">
                <FaUser className="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="pass" className="block text-gray-700 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="pass"
                className="h-10 w-full rounded border border-gray-300 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
                name="password"
                type="password"
                autoComplete="off"
              />
              <span className="absolute left-2 top-2">
                <FaLock className="text-gray-400" />
              </span>
            </div>
          </div>

          <input
            type="submit"
            className="btn w-full  font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value="Login"
          />

          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">Or login with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full h-10 rounded border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
