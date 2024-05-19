import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="text-xl">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    // const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <div className="mt-8 mb-20 text-center">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              {tagHeader}
            </h3>
            <ul className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-300">
              {postLinks}
            </ul>
            <p className="font-bold text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:text-gray-400 ease-linear transition-all duration-150">
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export const Head = ({ pageContext: { tag } }) => (
  /* eslint-disable-next-line */
  <SEO title={tag} />
);
