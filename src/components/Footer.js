import React from 'react';
import { Link } from 'gatsby';

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaFacebookMessenger,
} from 'react-icons/fa';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="relative bg-gray-300 dark:bg-gray-900 pt-16 pb-6 slant-tl-3 -mt-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700 dark:text-gray-300">
                Find muso.sk on any of these platforms, get response in 1-2
                business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  href="//fb.com/www.muso.sk"
                  className="bg-white dark:bg-gray-800 text-facebook shadow-lg font-normal h-10 w-10 items-center justify-center inline-flex align-center rounded-full outline-none focus:outline-none mr-2"
                  aria-label="Facebook" target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="//linkedin.com/in/RomanKovac"
                  className="bg-white dark:bg-gray-800 text-linkedin shadow-lg font-normal h-10 w-10 items-center justify-center inline-flex align-center rounded-full outline-none focus:outline-none mr-2"
                  aria-label="LinkedIn" target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="//github.com/musosoft"
                  className="bg-white dark:bg-gray-800 text-github shadow-lg font-normal h-10 w-10 items-center justify-center inline-flex align-center rounded-full outline-none focus:outline-none mr-2"
                  aria-label="GitHub" target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="//m.me/www.muso.sk"
                  className="bg-white dark:bg-gray-800 text-messenger shadow-lg font-normal h-10 w-10 items-center justify-center inline-flex align-center rounded-full outline-none focus:outline-none mr-2"
                  aria-label="Messenger" target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookMessenger />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/portfolio"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        href="/blog"
                      >
                        Latest Stories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 font-normal py-1">
                Copyright © {new Date().getFullYear()} muso.sk
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
