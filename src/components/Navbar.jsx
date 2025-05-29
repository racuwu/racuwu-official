"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "About Us",
    description: "Rotaract club of uwu",
    href: "about",
    icon: ChartPieIcon,
  },
  {
    name: "Club History",
    description: "The Story of Rotaract UWU",
    href: "/clubhistory",
    icon: FingerPrintIcon,
  },
  {
    name: "BOD",
    description: "Unraveling Rotaract UWU, Board of Directors",
    href: "/bod",
    icon: CursorArrowRaysIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white fixed w-full z-40">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo</span>
              <img
                className="h-[40px] w-auto"
                src="/assets/images/logo/racuwu.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            {/* OPEN MOBILE MENU */}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group
            className={`hidden lg:flex lg:gap-x-12 border-0 relative ring-0 ${
              mobileMenuOpen ? "border-none" : "border"
            }`}
          >
            <Popover className="relative ring-0 border-0">
              <Popover.Button className="flex border-0 ring-0 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                About
                <ChevronDownIcon
                  className="h-5 w-5 border-0 ring-0 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="avenues"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Avenues
            </a>
            <a
              href="projects"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Projects
            </a>
            <a
              href="news"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              News
            </a>
            <a
              href="contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </a>
            <a
              href="joinus"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Join US
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <a
              href="/blog"
              className="text-sm font-semibold border rounded-full bg-pink-700 text-white shadow-lg hover:border-pink-700 hover:bg-white hover:text-pink-700 hover:shadow-sm px-8 py-2"
            >
              Blog
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">RCUUWU</span>
                <img
                  className="h-[40px] w-auto"
                  src="/assets/images/logo/racuwu.png"
                  alt=""
                />
              </a>
              {/* CLOSE  MOBILE MENU*/}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 flex items-center justify-center z-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>

                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root z-50">
              <div className="-my-6 divide-y divide-gray-500/10">
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                  <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      Features
                      <ChevronDownIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {products.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon
                                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="flex-auto">
                                <a
                                  href={item.href}
                                  className="block font-semibold text-gray-900"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </Popover.Group>
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          About Us
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="avenues"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Avenues
                  </a>
                  <a
                    href="projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Projects
                  </a>
                  <a
                    href="news"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    News
                  </a>
                  <a
                    href="contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>

                </div>
                <div className="py-6">
                <a
                    href="joinus"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Join US
                  </a>
                  <a
                    href="https://racuwu.lk/blog"  target="_blank" rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#D51067] hover:bg-gray-50"
                  >
                    Visit Blog
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
