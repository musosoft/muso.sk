import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import * as FontAwesome from 'react-icons/fa';
import { FcCommandLine } from 'react-icons/fc';

export const PortfolioPageTemplate = ({
  image,
  subheading,
  heading,
  description,
  websites,
  it,
  testimonials,
  pricing,
  helmet,
}) => (
  <>
    <section className="container mx-auto px-4 py-12">
      {helmet || ''}
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="px-4 relative w-full text-center">
          <h2 className="text-4xl font-bold mt-3 mb-3 text-gray-700">
            {heading}
          </h2>
          <p className="mt-2 mb-4 text-xl leading-relaxed text-slate-400">
            {subheading}
          </p>
        </div>
      </div>
      <div className="items-center flex flex-wrap -mx-4">
        <div className="mr-auto px-4 relative w-full">
          <Highlights gridItems={websites.cards} />
        </div>
      </div>
    </section>
    <section className="pb-20 bg-gray-300 mt-24 clip polygon a-3 d-3">
      <div className="container mx-auto px-4">
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-40">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FcCommandLine size="3em" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {it.heading}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                {it.description}
              </p>
            </div>

            <div className="w-full md:w-8/12 px-4 mt-32">
              <div className="relative flex flex-wrap content-between justify-between gap-4 min-w-0 w-full mb-6">
                {it.cards.map((icon) => (
                  <div
                    key={icon.title}
                    className="bg-white mb-4 w-full sm:w-56 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                  >
                    <div
                      className="flex items-center py-2 px-4 bg-[color:var(--icon-color)] text-white"
                      style={{ '--icon-color': icon.color }}
                    >
                      {React.createElement(FontAwesome[icon.icon], {
                        size: '4em',
                        className: 'w-4/12',
                      })}
                      <h3 className="w-8/12 ml-3 font-semibold">
                        {icon.title}
                      </h3>
                    </div>
                    <p className="mt-2 pb-4 text-sm px-4">{icon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-48 md:mt-40 pb-8 relative">
      <div className="px-4 relative w-full text-center">
        <h2 className="text-4xl font-bold mt-3 mb-3 text-gray-700">
          Testimonials
        </h2>
        <p className="mt-2 mb-4 text-xl leading-relaxed text-slate-400">
          What people say
        </p>
      </div>
      <Testimonials testimonials={testimonials} />
    </section>
    <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
      <div className="pt-12 pb-4 relative w-full text-center">
        <h2 className="text-4xl font-bold mt-3 mb-3 text-gray-700">Pricing</h2>
        <p className="mt-2 mb-4 text-xl leading-relaxed text-slate-400">
          What people pay
        </p>
      </div>
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
          <Pricing data={pricing.plans} />
        </div>
      </div>
    </section>
  </>
);

PortfolioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  websites: PropTypes.shape({
    cards: PropTypes.array,
  }),
  it: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    cards: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PortfolioPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        websites={frontmatter.websites}
        it={frontmatter.it}
        testimonials={frontmatter.testimonials}
        pricing={frontmatter.pricing}
        helmet={
          // eslint-disable-next-line
          <SEO
            title={frontmatter.title}
            description={frontmatter.description}
            image={getSrc(frontmatter.image)}
          />
        }
      />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PortfolioPage;

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String) {
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
        websites {
          cards {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            title
            color
            text
          }
        }
        it {
          heading
          description
          cards {
            title
            icon
            color
            description
          }
        }
        testimonials {
          author
          company
          background
          quote
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
