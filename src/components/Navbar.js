import React from 'react';
import { Link } from 'gatsby';
import { Transition } from '@headlessui/react';
import logo from '../img/logo.svg';
import {
  HiOutlineMenu,
  HiChevronDown,
  HiOutlineChartBar,
  HiOutlineCursorClick,
  HiOutlineX,
  HiOutlineShieldCheck,
  HiOutlineViewGrid,
  HiOutlineRefresh,
  HiOutlinePlay,
  HiOutlinePhone,
  HiOutlineSupport,
  HiOutlineBookmarkAlt,
  HiOutlineCalendar,
} from 'react-icons/hi';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      flyoutMenuServicesOpen: false,
      flyoutMenuMoreOpen: false,
    };
  }
  toggleHamburger = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">muso.sk</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => this.toggleHamburger()}
              >
                <span className="sr-only">Open menu</span>
                <HiOutlineMenu className="h-6 w-6" />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                <Link to="/about">
                  <button
                    type="button"
                    className="group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      this.setState({
                        flyoutMenuServicesOpen: !this.state
                          .flyoutMenuServicesOpen,
                      });
                    }}
                  >
                    <span>Services</span>
                    <HiChevronDown
                      className={`ml-2 h-5 w-5 ${
                        this.state.flyoutMenuServicesOpen
                          ? 'text-gray-600'
                          : 'text-gray-400'
                      } group-hover:text-gray-500`}
                    />
                  </button>
                </Link>
                <Transition
                  show={this.state.flyoutMenuServicesOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  className={`z-20 absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/about"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineChartBar className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            IT Consulting
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get a better understanding of where your traffic is
                            coming from.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Website Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Security
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Your customers&#039; data will be safe and secure.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineViewGrid className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Integrations
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Connect with third-party tools that you&#039;re
                            already using.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineRefresh className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Automations
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Build strategic funnels that will drive your
                            customers to convert
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="flow-root">
                        <Link
                          to="/about"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <HiOutlinePlay className="flex-shrink-0 h-6 w-6 text-gray-400" />
                          <span className="ml-3">About me</span>
                        </Link>
                      </div>

                      <div className="flow-root">
                        <Link
                          to="/"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <HiOutlinePhone className="flex-shrink-0 h-6 w-6 text-gray-400" />
                          <span className="ml-3">Contact Sales</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              <Link
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Docs
              </Link>

              <div className="relative">
                <button
                  type="button"
                  className="group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    this.setState({
                      flyoutMenuMoreOpen: !this.state.flyoutMenuMoreOpen,
                    });
                  }}
                >
                  <span>More</span>
                  <HiChevronDown
                    className={`ml-2 h-5 w-5 ${
                      this.state.flyoutMenuMoreOpen
                        ? 'text-gray-600'
                        : 'text-gray-400'
                    } group-hover:text-gray-500`}
                  />
                </button>

                <Transition
                  show={this.state.flyoutMenuMoreOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  className="z-20 absolute left-1/2 transform -translate-x-1/2 mt-3
                  px-2 w-screen max-w-md sm:px-0"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineSupport className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Help Center
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get all of your questions answered in our forums or
                            contact support.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineBookmarkAlt className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Guides
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn how to maximize our platform to get the most
                            out of it.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineCalendar className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Events
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            See what meet-ups and other events we might be
                            planning near you.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-muso" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Security
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Understand how we take your privacy seriously.
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="mt-4 space-y-4">
                          <li className="text-base truncate">
                            <Link
                              to="/"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              Boost your conversion rate
                            </Link>
                          </li>

                          <li className="text-base truncate">
                            <Link
                              to="/"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              How to use search engine optimization to drive
                              traffic to your site
                            </Link>
                          </li>

                          <li className="text-base truncate">
                            <Link
                              to="/"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              Improve your customer experience
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-5 text-sm">
                        <Link
                          to="/"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {' '}
                          View all posts <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </nav>
            <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                to="/"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-muso hover:bg-muso-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
        <div
          className={`${
            this.state.active ? '' : 'hidden'
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="muso.sk" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => this.toggleHamburger()}
                  >
                    <span className="sr-only">Close menu</span>
                    <HiOutlineX className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineChartBar className="flex-shrink-0 h-6 w-6 text-muso" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      IT Consulting
                    </span>
                  </Link>

                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-muso" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Website Development
                    </span>
                  </Link>

                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-muso" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Security
                    </span>
                  </Link>

                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineViewGrid className="flex-shrink-0 h-6 w-6 text-muso" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Integrations
                    </span>
                  </Link>

                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineRefresh className="flex-shrink-0 h-6 w-6 text-muso" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Automations
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help Center
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Guides
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Security
                </Link>

                <Link
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Events
                </Link>
              </div>
              <div>
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <Link
                    to="/"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
