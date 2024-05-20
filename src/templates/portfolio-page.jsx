import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PortfolioPageTemplate from './PortfolioPageTemplate';

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

export const Head = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    /* eslint-disable-next-line */
    <SEO
      title={frontmatter.title}
      description={frontmatter.description}
      image={getSrc(frontmatter.image)}
    />
  );
};
