import { NavLink } from "react-router-dom";
import DefaultAuthLayout from "../../components/layouts/DefaultAuthLayout";

const RegisterPage = () => {
  document.title = "Login | Animews.com";
  return (
    <>
      <DefaultAuthLayout
        title="Login"
        subtitle="Welcome back to Animews! Mewchan"
      >
        <form className="mt-8 w-full grid grid-cols-6 gap-4">
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
              className="mt-1 p-3 w-full rounded-lg ring-1 ring-inset ring-gray-300 text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm"
            />
          </div>

          <div className="col-span-6">
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
              className="mt-1 p-3 w-full rounded-lg ring-1 ring-inset ring-gray-300 text-gray-700 focus:outline-blue-500 focus:ring-2 shadow-sm"
            />
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
              className="inline-block shrink-0 rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition focus:ring hover:bg-blue-500 active:bg-blue-500"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Don&apos;t have an account yet?
              <NavLink to="/auth/register" className="text-gray-700 underline">
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
