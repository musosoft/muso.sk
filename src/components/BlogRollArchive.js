import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogRollArchive = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="mt-16 max-w-8xl mx-auto px-6 lg:px-8">
      <div className="items-center flex flex-wrap -mx-4">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className={`mb-12 relative flex flex-col min-w-0 break-words ${
                post.frontmatter.featuredpost ? 'bg-dodgerBlue-100' : 'bg-white'
              } w-full mb-6 shadow-lg rounded-lg`}
              key={post.id}
            >
              <div className="items-center flex flex-wrap -mx-4">
                <div className="px-4 relative w-full lg:w-6/12">
                  {post.frontmatter.image && (
                    <GatsbyImage
                      layout="fixed"
                      className="w-full sm:rounded-lg rounded-r-none"
                      image={
                        post.frontmatter.image.childImageSharp.gatsbyImageData
                      }
                      alt={`Featured image of ${post.frontmatter.title}`}
                    />
                  )}
                </div>
                <div className="px-4 relative w-full lg:w-6/12">
                  <div className="lg:pl-0 px-4 py-5 flex-auto">
                    <h3 className="text-3xl font-semibold text-blueGray-700 leading-tight">
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                      <span className="mr-2">{post.excerpt}</span>
                      <Link to={post.fields.slug} className="text-sky-500">
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

BlogRollArchive.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const BlogRollArchiveQuery = () => (
  <StaticQuery
    query={graphql`
      query BlogRollArchiveQuery {
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
                image {
                  childImageSharp {
                    gatsbyImageData(
                      height: 315
                      width: 600
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollArchive data={data} count={count} />}
  />
);

export default BlogRollArchiveQuery;
