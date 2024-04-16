/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { ThemeToggle } from './ThemeToggle.js';
import logo from '../../static/img/logo.svg';
import {
  HiOutlineMenu,
  HiChevronDown,
  HiOutlineServer,
  HiOutlineCursorClick,
  HiOutlineX,
  HiOutlineShieldCheck,
  HiOutlineViewGrid,
  HiOutlineRefresh,
  HiOutlineUsers,
  HiOutlinePhone,
  HiOutlineSupport,
  HiOutlineBookmarkAlt,
} from 'react-icons/hi';

const services = [
  {
    name: 'Websites',
    description: 'Make site which will fit all your needs',
    href: '/portfolio',
    icon: HiOutlineCursorClick,
  },
  {
    name: 'Software',
    description: 'Tweak operating systems, get customized experience',
    href: '/portfolio',
    icon: HiOutlineViewGrid,
  },
  {
    name: 'Security',
    description: 'Get rid and secure website or operating system from malware',
    href: '/portfolio',
    icon: HiOutlineShieldCheck,
  },
  {
    name: 'Servers',
    description: 'Custom Dedicated Gaming server or Website hosting',
    href: '/portfolio',
    icon: HiOutlineServer,
  },
  {
    name: 'Automations',
    description: 'Script your repeating tasks, collect data from websites',
    href: '/portfolio',
    icon: HiOutlineRefresh,
  },
];
const callsToAction = [
  { name: 'Portfolio', href: '/portfolio', icon: HiOutlineUsers },
  { name: 'Contact', href: '/contact', icon: HiOutlinePhone },
];
const blog = [
  {
    name: 'Blog',
    description: 'See technology tips and tricks.',
    href: '/blog',
    icon: HiOutlineBookmarkAlt,
  },
  // {
  //   name: 'Help Center',
  //   description: 'Get help with your technical problems.',
  //   href: '/blog',
  //   icon: HiOutlineSupport,
  // },
  // {
  //   name: 'Guides',
  //   description: 'See technology tips and tricks.',
  //   href: '/blog',
  //   icon: HiOutlineBookmarkAlt,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  return (
    <Popover className="relative bg-white dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-gray-700 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="sr-only">muso.sk</span>
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dodgerBlue-500">
                  <span className="sr-only">Open menu</span>
                  <HiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {/* <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500 dark:text-gray-300',
                          'group bg-white dark:bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dodgerBlue-500'
                        )}
                      >
                        <span>Services</span>
                        <HiChevronDown
                          className={classNames(
                            open ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500 dark:text-gray-300'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                              {services.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-dodgerBlue-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <Link
                                    to={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> */}

                <Link
                  to="/portfolio"
                  className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Portfolio
                </Link>
                <Link
                  to="/blog"
                  className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Contact
                </Link>

                {/* <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500 dark:text-gray-300',
                          'group bg-white dark:bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dodgerBlue-500'
                        )}
                      >
                        <span>Blog</span>
                        <HiChevronDown
                          className={classNames(
                            open ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500 dark:text-gray-300'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                              {blog.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-dodgerBlue-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 dark:text-gray-300 uppercase">
                                  Recent Posts
                                </h3>
                                <StaticQuery
                                  query={graphql`
                                    query NavbarQuery {
                                      allMarkdownRemark(
                                        sort: {
                                          order: DESC
                                          fields: [frontmatter___date]
                                        }
                                        filter: {
                                          frontmatter: {
                                            templateKey: { eq: "blog-post" }
                                          }
                                        }
                                      ) {
                                        edges {
                                          node {
                                            id
                                            fields {
                                              slug
                                            }
                                            frontmatter {
                                              title
                                            }
                                          }
                                        }
                                      }
                                    }
                                  `}
                                  render={(data) => {
                                    const { edges: posts } =
                                      data.allMarkdownRemark;
                                    return (
                                      <ul className="mt-4 space-y-4">
                                        {posts.map(({ node: post }) => (
                                          <li
                                            key={post.id}
                                            className="text-base truncate"
                                          >
                                            <Link
                                              to={post.fields.slug}
                                              className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300"
                                            >
                                              {post.frontmatter.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    );
                                  }}
                                />
                              </div>
                              <div className="mt-5 text-sm">
                                <Link
                                  to="/blog"
                                  className="font-medium text-dodgerBlue-600 hover:text-dodgerBlue-500"
                                >
                                  View all posts
                                  <span aria-hidden="true">&rarr;</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> */}
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <ThemeToggle />
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-2"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={logo} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dodgerBlue-500">
                        <span className="sr-only">Close menu</span>
                        <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-dodgerBlue-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link
                      to="/portfolio"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300"
                    >
                      Pricing
                    </Link>

                    <Link
                      to="/contact"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300"
                    >
                      Contact
                    </Link>
                    {blog.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {/* <div>
                    <Link
                      to="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dodgerBlue-600 hover:bg-dodgerBlue-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-300">
                      Existing customer?{' '}
                      <Link
                        to="#"
                        className="text-dodgerBlue-600 hover:text-dodgerBlue-500"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div> */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

Navbar.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default Navbar;
