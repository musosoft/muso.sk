import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IndexPageTemplate from './IndexPageTemplate';

const useIndexPageData = () => {
  const data = useStaticQuery(graphql`
    query IndexPage {
      mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
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
  `);

  return data.mdx;
};

const IndexPage = () => {
  const post = useIndexPageData();

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  return (
    <Layout>
      <IndexPageTemplate
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        mainpitch={post.frontmatter.mainpitch}
        intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const Head = () => {
  const post = useIndexPageData();

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={getSrc(post.frontmatter.image)}
    />
  );
};
