import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

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
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-gray-700">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {heading}
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                className="text-gray-700"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>
              {description}
            </p>
            <div className="mt-12">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                target="_blank"
                rel="noreferrer"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
                rel="noreferrer"
              >
                Github Star
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
        src={image.childImageSharp.gatsbyImageData.images.fallback.src}
        alt="..."
      />
    </section>
    <section className="pb-20 bg-gray-300 mt-24">
      <div className="container mx-auto px-4">
        <Features gridItems={intro.blurbs} />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
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
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <GatsbyImage
                  image={main.image1.image.childImageSharp.gatsbyImageData}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                  alt={main.image1.alt}
                />

                <GatsbyImage
                  image={main.image2.image.childImageSharp.gatsbyImageData}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                  alt={main.image2.alt}
                />

                <GatsbyImage
                  image={main.image3.image.childImageSharp.gatsbyImageData}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                  alt={main.image3.alt}
                />
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
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
  query ProductPage($id: String!) {
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
            icon
            color
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
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
