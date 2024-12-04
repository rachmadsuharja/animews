import { NavLink, useNavigate } from "react-router-dom";
import DefaultAuthLayout from "../../components/layouts/DefaultAuthLayout";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const RegisterPage = () => {
  document.title = "Login | Animews.com";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const { email, password } = formData;
      await axios
        .post(
          import.meta.env.VITE_API_BASE_URL + "/auth/login",
          { email, password },
          { withCredentials: true }
        )
        .then((response) => {
          navigate("/");
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
          });
        });

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      setErrors(error.response.data.errors || {});
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <DefaultAuthLayout title="Login" subtitle="Welcome back to Animews!">
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full grid grid-cols-6 gap-4"
        >
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

          <div className="col-span-6 sm:col-span-6">
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

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              Forgot your password?{" "}
              <a href="#" className="text-blue-700 underline">
                Click here to reset
              </a>
              .
            </p>
          </div>
          <div className="col-span-6 flex flex-col sm:flex-row text-center justify-start sm:items-center sm:gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-block shrink-0 rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition focus:ring hover:bg-blue-500 active:bg-blue-500 ${
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
                  Login
                </div>
              ) : (
                "Login"
              )}
            </button>

            <p className="mt-4 text-sm text-left text-gray-500 sm:mt-0">
              Don&apos;t have an account yet?
              <NavLink to="/auth/register" className="text-blue-700 underline">
                {" "}
                Register
              </NavLink>
              .
            </p>
          </div>
        </form>
      </DefaultAuthLayout>
    </>
  );
};

export default RegisterPage;
