import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="mt-16 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts &&
          posts.map(({ node: post }) => (
            <article
              key={post.id}
              className={`relative border border-gray-200 rounded-lg px-4 py-6 mb-4 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16 ${
                post.frontmatter.featuredpost ? 'bg-gray-200' : 'bg-gray-300'
              }`}
            >
              <header>
                <p className="text-2xl font-semibold font-display text-gray-900 sm:text-3xl">
                  <span className="block text-white max-w-xl font-medium">
                    {post.frontmatter.date}
                  </span>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </p>
              </header>
              <p className="mt-2 max-w-2xl text-base text-gray-500">
                {post.excerpt}
                <Link className="mt-2 block" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
              {post.frontmatter.featuredimage ? (
                <div className="hidden lg:block absolute inset-y-0 lg:left-2/3 right-0">
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
              excerpt(pruneLength: 400)
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
                    fluid(maxWidth: 400, quality: 100) {
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
