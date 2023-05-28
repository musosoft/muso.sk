import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="mt-16 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl mb-4 font-semibold leading-normal">
        Latest news
      </h3>
      <div className="items-center flex flex-wrap -mx-4">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="px-4 relative w-full lg:w-3/12" key={post.id}>
              <div className="h-[180px] overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg transition-all duration-150 ease-in-out hover:z-10 hover:transform hover:scale-110 group rounded-lg mb-4">
                {post.frontmatter.image && (
                  <GatsbyImage
                    layout="fixed"
                    className="absolute w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out group-hover:transform group-hover:scale-110 rounded-lg"
                    image={getImage(post.frontmatter.image)}
                    alt={`Featured image of ${post.frontmatter.title}`}
                  />
                )}
                <div
                  className={`absolute w-full h-full ${
                    post.frontmatter.featuredpost
                      ? 'bg-dodgerBlue-900'
                      : 'bg-gray-900'
                  } opacity-50 rounded-lg`}
                ></div>
                <Link to={post.fields.slug}>
                  <div className="absolute text-left p-6 bottom-0">
                    <h6 className="text-xl leading-normal mb-0 text-white opacity-75">
                      {post.frontmatter.date}
                    </h6>
                    <h5 className="text-2xl font-bold leading-tight mt-0 mb-2 text-white">
                      {post.frontmatter.title}
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const BlogRollQuery = () => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
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
                    height: 200
                    width: 300
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
  `);
  return <BlogRoll data={data} />;
};

export default BlogRollQuery;
