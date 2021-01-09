import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { FaStar } from 'react-icons/fa';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="mt-16 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl mb-4 font-semibold leading-normal">
          Latest news
        </h3>
        {posts &&
          posts.map(({ node: post }) => (
            <article
              key={post.id}
              className="relative px-3 py-4 mb-4 overflow-hidden sm:px-6 sm:py-8 lg:p-8 xl:p-12"
            >
              <header>
                <p className="text-2xl font-semibold font-display text-gray-900 sm:text-3xl">
                  <span className="block text-gray-500 max-w-xl text-xl font-medium">
                    {post.frontmatter.date}
                  </span>
                  {post.frontmatter.featuredpost && (
                    <span title="Featured" className="absolute text-sm -m-1 text-yellow-200">
                      <FaStar />
                    </span>
                  )}
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </p>
              </header>
              <p className="mt-2 max-w-2xl text-base text-gray-500">
                {post.excerpt}
                <Link className="mt-2 font-bold block" to={post.fields.slug}>
                  Keep Reading
                </Link>
              </p>
              {post.frontmatter.featuredimage ? (
                <div className="lg:block absolute inset-y-0 lg:left-2/3 right-0">
                  <PreviewCompatibleImage
                    imageInfo={{
                      className: 'w-full h-full object-cover object-left',
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
            </article>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 420, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
