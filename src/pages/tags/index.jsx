import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { kebabCase } from '../../utils/kebabCase';
import SEO from '../../components/SEO';

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <div className="mt-8 mb-20 text-center">
        <h1 className="text-3xl mb-2 font-semibold leading-normal">Tags</h1>
        {group.map((tag) => (
          <span
            className="text-xs font-semibold inline-block p-2 rounded-full text-gray-600 dark:text-gray-400 bg-gray-50 uppercase last:mr-0 mr-2 mt-2"
            key={tag.fieldValue}
          >
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue}
              <span className="inline-flex items-center justify-center px-2 py-1 text-tiny font-bold leading-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-full ml-2">
                {tag.totalCount}
              </span>
            </Link>
          </span>
        ))}
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => (
  /* eslint-disable-next-line */
  <SEO title='Tags' />
);
