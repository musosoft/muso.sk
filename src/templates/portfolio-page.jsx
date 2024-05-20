import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PortfolioPageTemplate from './PortfolioPageTemplate';

const usePortfolioPageData = () => {
  const data = useStaticQuery(graphql`
    query PortfolioPage {
      mdx(frontmatter: { templateKey: { eq: "portfolio-page" } }) {
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
  `);

  return data.mdx;
};

const PortfolioPage = () => {
  const post = usePortfolioPageData();

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  return (
    <Layout>
      <PortfolioPageTemplate
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        websites={post.frontmatter.websites}
        it={post.frontmatter.it}
        testimonials={post.frontmatter.testimonials}
        pricing={post.frontmatter.pricing}
      />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PortfolioPage;

export const Head = () => {
  const post = usePortfolioPageData();

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={getSrc(post.frontmatter.image)}
    />
  );
};
