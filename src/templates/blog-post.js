import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import { getSrc } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { kebabCase } from '../../src/utils/kebabCase';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="my-12 relative">
      {helmet || ''}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="mx-auto relative w-full md:w-6/12">
            <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2 text-center">
              {title}
            </h3>
            <h6 className="text-lg mt-2 mb-0 text-gray-400 text-center">
              {description}
            </h6>
            <PostContent
              className="pt-12 prose text-gray-700 max-w-none"
              content={content}
            />
            {tags && tags.length ? (
              <div className="flex flex-wrap items-center mt-0 mb-5 leading-relaxed text-gray-500">
                <p className="text-lg mr-2 my-2">Tags: </p>
                {tags.map((tag) => (
                  <span
                    className="text-gray-500 bg-gray-200 text-xs font-bold inline-block py-1 uppercase last:mr-0 mr-1 leading-tight rounded-full px-3"
                    key={tag + `tag`}
                  >
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

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
