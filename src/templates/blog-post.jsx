import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import BlogPostTemplate from './BlogPostTemplate';

const useBlogPostData = () => {
  const data = useStaticQuery(graphql`
    query BlogPost {
      mdx(frontmatter: { templateKey: { eq: "blog-post" } }) {
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
        body
      }
    }
  `);
  
  return data.mdx;
};


const BlogPost = () => {
  const post = useBlogPostData();

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  return (
    <Layout>
      <BlogPostTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        children={post.body}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
};

export default BlogPost;

export const Head = () => {
  const post = useBlogPostData();

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={getSrc(post.frontmatter.image)}
    />
  );
};
