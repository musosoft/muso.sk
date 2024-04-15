import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import { getSrc } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import BlogPostTemplate from "./BlogPostTemplate";

const BlogPost = ({ data }) => {
  if (!data || !data.markdownRemark) {
    return <div>Error: Post not found</div>;
  }

  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          // eslint-disable-next-line
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={getSrc(post.frontmatter.image)}
          />
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            gatsbyImageData(
              height: 630
              width: 1200
              quality: 100
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
