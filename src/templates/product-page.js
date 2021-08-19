import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import * as FontAwesome from 'react-icons/fa';
import { FcCommandLine } from 'react-icons/fc';

const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <>
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="px-4 relative w-full text-center">
          <h2 className="text-4xl font-bold mt-3 mb-1 text-gray-700">
            {title}
          </h2>
        </div>
      </div>
      <div className="items-center flex flex-wrap -mx-4">
        <div className="ml-auto text-left mt-6 px-4 relative w-full lg:w-4/12">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg text-white bg-[#c61d1d]">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt=""
              className="w-full flex-shrink-0 rounded-t-lg"
            />
            <blockquote className="p-6 relative mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="block w-full absolute text-blueGray-700 h-95-px -top-94-px left-0"
              >
                <polygon
                  points="0,52 583,95 0,95"
                  className="text-[#c61d1d] fill-current"
                ></polygon>
                <polygon
                  points="0,42 583,95 683,0 0,95"
                  opacity=".2"
                  className="text-[#c61d1d] fill-current"
                ></polygon>
              </svg>
              <h4 className="text-2xl font-semibold mt-0 text-white">
                {heading}
              </h4>
              <p className="text-white mt-2">{description}</p>
            </blockquote>
          </div>
        </div>
        <div className="mr-auto px-4 relative w-full lg:w-7/12">
          <Highlights gridItems={intro.blurbs} />
        </div>
      </div>
    </section>
    <section className="pb-20 bg-gray-300 mt-24">
      <div className="container mx-auto px-4">
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FcCommandLine size="3em" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {main.heading}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                {main.description}
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                View All{' '}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-8/12 px-4 mt-32">
              <div className="relative flex flex-wrap content-between justify-between gap-4 min-w-0 w-full mb-6 mt-48 md:mt-0">
                {main.icons.map((icon) => (
                  <div
                    key={icon.title}
                    className="bg-white w-52 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                  >
                    <div
                      className="flex items-center py-2 px-4 bg-[color:var(--icon-color)] text-white"
                      style={{ '--icon-color': icon.color }}
                    >
                      {React.createElement(FontAwesome[icon.icon], {
                        size: '4em',
                        className: 'w-4/12',
                      })}
                      <h3 class="w-8/12 ml-3 font-semibold">{icon.title}</h3>
                    </div>
                    <p class="mt-2 pb-4 text-sm px-4">{icon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonials testimonials={testimonials} />

    <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
      <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-600">
              <img
                alt="..."
                src={
                  fullImage.childImageSharp.gatsbyImageData.images.fallback.src
                }
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-blue-600 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  {pricing.heading}
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  {pricing.description}
                </p>
              </blockquote>
            </div>
          </div>
          <Pricing data={pricing.plans} />
        </div>
      </div>
    </section>
  </>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    icons: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            title
            color
            text
          }
          heading
          description
        }
        main {
          heading
          description
          icons {
            title
            icon
            color
            description
          }
        }
        testimonials {
          author
          company
          photo
          quote
        }
        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
