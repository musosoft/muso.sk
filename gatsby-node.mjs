import { resolve } from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { get } from './src/utils/get.mjs';
import { uniq } from './src/utils/uniq.mjs';
import { kebabCase } from './src/utils/kebabCase.mjs';

export async function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    const { id, fields, frontmatter } = node;
    createPage({
      path: fields.slug,
      tags: frontmatter.tags,
      component: resolve(`src/templates/${String(frontmatter.templateKey)}.js`),
      context: { id },
    });
  });

  const tags = uniq(posts.reduce((acc, { node }) => {
    if (get(node, 'frontmatter.tags')) {
      acc.push(...node.frontmatter.tags);
    }
    return acc;
  }, []));

  tags.forEach((tag) => {
    const tagPath = `/tags/${kebabCase(tag)}/`;
    createPage({
      path: tagPath,
      component: resolve('src/templates/tags.js'),
      context: { tag },
    });
  });
}

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
