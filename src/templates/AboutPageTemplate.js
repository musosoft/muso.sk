// AboutPageTemplate.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Content from '../components/Content';
import muso from '../../static/img/muso.jpg';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const AboutPageTemplate = ({
  position,
  location,
  heading,
  content,
  image,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <main className="profile-page">
      <section className="relative block h-500-px">
        <div className="absolute top-0 w-full h-full bg-gray-300 dark:bg-gray-900">
          <GatsbyImage
            alt=""
            image={image.childImageSharp.gatsbyImageData}
            className="w-full h-full absolute slant-br-9"
          />
        </div>
      </section>
      <section className="relative py-16 bg-gray-300 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={muso}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <a
                      href="/contact"
                      className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-2 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-3 py-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 dark:text-gray-300">
                        7 years
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        Web development
                      </span>
                    </div>
                    <div className="mr-3 py-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 dark:text-gray-300">
                        13 years
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-300">IT services</span>
                    </div>
                    <div className="py-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 dark:text-gray-300">
                        4 years
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        Remote consulting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-4xl font-semibold leading-normal text-gray-800 dark:text-gray-200 mb-2">
                  {heading}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 dark:text-gray-300 font-bold uppercase">
                  <FaMapMarkerAlt
                    size=""
                    className="inline-block mr-2 text-lg text-gray-500 dark:text-gray-300"
                  />
                  {location}
                </div>
                <div className="mb-2 text-gray-700 dark:text-gray-300 mt-10">
                  <FaBriefcase
                    size=""
                    className="inline-block mr-2 text-lg text-gray-500 dark:text-gray-300"
                  />
                  {position}
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <PageContent
                      className="leading-relaxed text-gray-800 dark:text-gray-200 prose lg:prose-lg max-w-none"
                      content={content}
                    />
                    <Link to="/portfolio" className="font-normal text-blue-500">
                      Check my services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
