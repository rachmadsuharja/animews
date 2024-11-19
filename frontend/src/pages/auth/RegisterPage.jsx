import { NavLink } from "react-router-dom";
import DefaultAuthLayout from "./../../components/layouts/DefaultAuthLayout";

const RegisterPage = () => {
  return (
    <>
      <DefaultAuthLayout
        title="Register"
        subtitle="Welcome to Animews! Mewchan"
      >
        <form className="mt-8 grid grid-cols-6 gap-4">
          <div className="col-span-6">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Your full name"
              className="mt-1 p-3 w-full rounded-lg ring-1 ring-inset ring-gray-300 bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@example.com"
              className="mt-1 p-3 w-full rounded-lg ring-1 ring-inset ring-gray-300 bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm"
            />
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
              className="mt-1 p-3 w-full rounded-lg ring-1 ring-inset ring-gray-300 bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>

            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="********"
              className="mt-1 p-3 w-full rounded-lg ring-1 ring-inset ring-gray-300 bg-white text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm"
            />
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
            <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white transition focus:ring hover:bg-blue-500 active:bg-blue-500">
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <NavLink to="/auth/login" className="text-gray-700 underline">
                {" "}
                Login
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
