import { resolve } from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { kebabCase } from './src/utils/kebabCase.mjs';

export async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
    return;
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(({ id, fields, frontmatter, internal }) => {
    createPage({
      path: fields.slug,
      component: `${resolve(`src/templates/${String(frontmatter.templateKey)}.jsx`)}?__contentFilePath=${internal.contentFilePath}`,
      context: { id },
    });
  });

  const tags = [...new Set(posts.flatMap(post => post.frontmatter.tags || []))];

  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: resolve('src/templates/tags.jsx'),
      context: { tag },
    });
  });
}

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
}
