import { resolve } from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { get } from './src/utils/get.mjs';
import { uniq } from './src/utils/uniq.mjs';
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

  posts.forEach((node) => {
    const { id, fields, frontmatter, internal } = node;
    const postTemplate = resolve(`src/templates/${String(frontmatter.templateKey)}.jsx`);
    
    createPage({
      path: fields.slug,
      tags: frontmatter.tags,
      component: `${postTemplate}?__contentFilePath=${internal.contentFilePath}`,
      context: { id },
    });
  });

  const tags = uniq(posts.reduce((acc, node) => {
    if (get(node, 'frontmatter.tags')) {
      acc.push(...node.frontmatter.tags);
    }
    return acc;
  }, []));

  tags.forEach((tag) => {
    const tagPath = `/tags/${kebabCase(tag)}/`;
    createPage({
      path: tagPath,
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
