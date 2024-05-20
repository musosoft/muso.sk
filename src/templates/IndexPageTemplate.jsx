import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FcIdea } from 'react-icons/fc';

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  inPreview = false,
}) => {
  const mainImageData = !inPreview ? getImage(image) : image;
  const introImageData = !inPreview ? getImage(intro?.image) : intro?.image;

  return (
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full grid">
          {!inPreview && mainImageData && (
            <GatsbyImage image={mainImageData} alt="" />
          )}
          {inPreview && mainImageData && <img src={mainImageData} alt="" />}
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-25 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center bg-gradient-to-r from-gray-100 to-dodgerBlue-200 bg-clip-text text-transparent">
              <h1 className="font-semibold text-6xl">{heading}</h1>
              <p className="mt-4 text-2xl">{subheading}</p>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none h-16 slant-tl-16 bg-gray-300 dark:bg-gray-900 -mb-px">
        </div>
      </div>

      <section className="pb-20 bg-gray-300 dark:bg-gray-900 -mt-24">
        <div className="container mx-auto px-4">
          <Features gridItems={intro.blurbs} />
          <div className="flex flex-wrap items-center mt-32 mb-8">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-4">
              <div className="text-gray-600 dark:text-gray-400 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <FcIdea size="2em" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {mainpitch.title}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-300">
                {mainpitch.description}
              </p>
              <Link to="/blog/" className="font-bold text-gray-800 dark:text-gray-200 mt-8">
                Check Blog
              </Link>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-dodgerBlue-500">
                {!inPreview && introImageData && (
                  <GatsbyImage
                    alt=""
                    image={introImageData}
                    className="w-full align-middle rounded-t-lg"
                  />
                )}
                {inPreview && introImageData && (
                  <img
                    alt=""
                    src={introImageData}
                    className="w-full align-middle rounded-t-lg"
                  />
                )}
                <div className="h-4 slant-tl-4 -mt-4 bg-dodgerBlue-500 dark:bg-gray-800"></div>
                <blockquote className="relative p-8 mb-4">
                  {/* <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-dodgerBlue-500 fill-current"
                    ></polygon>
                  </svg> */}
                  <h4 className="text-xl font-bold text-white">
                    {intro.heading}
                  </h4>
                  <p className="text-md font-light my-2 text-white">
                    {intro.description}
                  </p>
                  <Link to="/contact" className="font-bold text-white mt-8">
                    Get a Quote
                  </Link>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bottom-auto -top-20 left-0 right-0 w-full absolute pointer-events-none slant-tl-20 h-20 bg-white dark:bg-gray-800 mt-px">           
          </div>
          {!inPreview && <BlogRoll />}
        </div>
      </section>
    </main>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

export default IndexPageTemplate;
