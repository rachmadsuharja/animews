import { NavLink, useNavigate } from "react-router-dom";
import DefaultAuthLayout from "./../../components/layouts/DefaultAuthLayout";
import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const RegisterPage = () => {
  document.title = "Register | Animews.com";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Password doesn't match" });
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { fullName, email, password } = formData;
      await axios.post(
        import.meta.env.VITE_API_BASE_URL + "/auth/register",
        { fullName, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      toast.success("User successfully registered!", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/auth/login");
    } catch (error) {
      setErrors(error.response.data.errors || {});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DefaultAuthLayout title="Register" subtitle="Welcome to Animews!">
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-4">
          <div className="col-span-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 p-3 w-full rounded-lg bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm ring-1 ring-inset ${
                errors.fullName ? "ring-red-500" : "ring-gray-300"
              }`}
            />
            {errors.fullName && (
              <div className="mt-1 text-red-500 text-xs flex gap-1">
                <ExclamationCircleIcon className="size-4 flex-shrink-0" />
                {errors.fullName}
              </div>
            )}
          </div>

          <div className="col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-3 w-full rounded-lg bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm ring-1 ring-inset ${
                errors.email ? "ring-red-500" : "ring-gray-300"
              }`}
            />
            {errors.email && (
              <div className="mt-1 text-red-500 text-xs flex gap-1">
                <ExclamationCircleIcon className="size-4 flex-shrink-0" />
                {errors.email}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 p-3 w-full rounded-lg bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm ring-1 ring-inset ${
                errors.password ? "ring-red-500" : "ring-gray-300"
              }`}
            />
            {errors.password && (
              <div className="mt-1 text-red-500 text-xs flex gap-1">
                <ExclamationCircleIcon className="size-4 flex-shrink-0" />
                {errors.password}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 p-3 w-full rounded-lg bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm ring-1 ring-inset ${
                errors.confirmPassword ? "ring-red-500" : "ring-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <div className="mt-1 text-red-500 text-xs flex gap-1">
                <ExclamationCircleIcon className="size-4 flex-shrink-0" />
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-blue-700 underline">
                {" "}
                terms and conditions{" "}
              </a>
              and
              <a href="#" className="text-blue-700 underline">
                {" "}
                privacy policy
              </a>
              .
            </p>
          </div>

          <div className="col-span-6 flex flex-col sm:flex-row text-center justify-start sm:items-center sm:gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white transition focus:ring hover:bg-blue-500 active:bg-blue-500 ${
                isLoading && "cursor-not-allowed bg-blue-500"
              }`}
            >
              {isLoading ? (
                <div className="flex">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating account
                </div>
              ) : (
                "Create an account"
              )}
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <NavLink to="/auth/login" className="text-blue-700 underline">
                {" "}
                Login
              </NavLink>
              .
            </p>
          </div>
        </form>
        <ToastContainer />
      </DefaultAuthLayout>
    </>
  );
};

export default RegisterPage;
