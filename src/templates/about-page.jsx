import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Content from '../components/Content';
import AboutPageTemplate from './AboutPageTemplate';

const useAboutPageData = () => {
  const data = graphql`
    query AboutPage {
      mdx(frontmatter: { templateKey: { eq: "about-page" } }) {
        frontmatter {
          title
          description
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

  return data.mdx;
};

const AboutPage = () => {
  const post = useAboutPageData();

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={Content}
        title={post.frontmatter.title}
        location={post.frontmatter.location}
        position={post.frontmatter.position}
        heading={post.frontmatter.heading}
        image={post.frontmatter.image}
        content={post.internal.contentFilePath}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object,
};

export default AboutPage;

export const Head = () => {
  const post = useAboutPageData();

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={getSrc(post.frontmatter.image)}
    />
  );
};
