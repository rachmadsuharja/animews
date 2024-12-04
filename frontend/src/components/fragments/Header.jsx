"use client";

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Cookies from "js-cookie";
import axios from "axios";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("auth_token");
    token && setIsLoggedIn(true);
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        import.meta.env.VITE_API_BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-blue-600">ANIMEWS</span>
            {/* <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </NavLink>
          <NavLink
            to="/anime"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Anime
          </NavLink>
          <NavLink
            to="/manga"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Manga
          </NavLink>
          <NavLink
            to="/forum"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Forum
          </NavLink>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              More
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-3 top-full z-10 mt-5 py-1 w-60 overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <NavLink
                to="/music"
                className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6 hover:bg-gray-50"
              >
                Music
              </NavLink>
              <NavLink
                to="/events"
                className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6 hover:bg-gray-50"
              >
                Events
              </NavLink>
              <NavLink
                to="/industry"
                className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6 hover:bg-gray-50"
              >
                Industry
              </NavLink>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        {isLoggedIn ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            <Popover className="hidden md:relative md:block">
              <PopoverButton className="overflow-hidden rounded-full border border-gray-300 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute end-0 z-10 mt-0.5 py-1 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                role="menu"
              >
                <NavLink
                  to="/music"
                  className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6 hover:bg-gray-50"
                >
                  My Profile
                </NavLink>
                <NavLink
                  to="/events"
                  className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6 hover:bg-gray-50"
                >
                  Settings
                </NavLink>
                <form onSubmit={logout}>
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    Logout
                  </button>
                </form>
              </PopoverPanel>
            </Popover>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            <NavLink
              to="/auth/login"
              className="bg-blue-600 text-blue-100 px-6 py-2 rounded text-sm/6 font-semibold"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="bg-blue-100 text-blue-600 px-6 py-2 rounded text-sm/6 font-semibold"
            >
              Register
            </NavLink>
          </div>
        )}
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/anime"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Anime
                </NavLink>
                <NavLink
                  to="/manga"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Manga
                </NavLink>
                <NavLink
                  to="/forum"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Forum
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    More
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <DisclosureButton
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Music
                    </DisclosureButton>
                    <DisclosureButton
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Events
                    </DisclosureButton>
                    <DisclosureButton
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Industry
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <hr className="my-3" />
              {isLoggedIn ? (
                <Disclosure>
                  <DisclosureButton className="overflow-hidden rounded-full border border-gray-300 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="size-10 object-cover"
                    />
                  </DisclosureButton>
                  <DisclosurePanel>
                    <DisclosureButton
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      My Profile
                    </DisclosureButton>
                    <DisclosureButton
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Settings
                    </DisclosureButton>
                    <DisclosureButton
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Logout
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
              ) : (
                <div className="py-6">
                  <NavLink
                    to="/auth/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/auth/register"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
