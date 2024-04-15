import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { getSrc } from 'gatsby-plugin-image';
import IndexPageTemplate from './IndexPageTemplate';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              height: 500
              width: 1519
              quality: 70
              layout: CONSTRAINED
            )
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            icon
            color
            title
            text
            button
            link
          }
          heading
          image {
            childImageSharp {
              gatsbyImageData(
                height: 300
                width: 384
                quality: 100
                layout: CONSTRAINED
              )
            }
          }
          description
        }
      }
    }
  }
`;
