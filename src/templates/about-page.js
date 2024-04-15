import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HTMLContent from '../components/Content';
import AboutPageTemplate from './AboutPageTemplate';

const AboutPage = ({ data }) => {
  if (!data || !data.markdownRemark) {
    return <div>Error: Post not found</div>;
  }

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        location={post.frontmatter.location}
        position={post.frontmatter.position}
        heading={post.frontmatter.heading}
        image={post.frontmatter.image}
        content={post.html}
        helmet={
          // eslint-disable-next-line
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={getSrc(post.frontmatter.image)}
          />
        }
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        location
        position
        heading
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1519
              height: 500
              quality: 80
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
