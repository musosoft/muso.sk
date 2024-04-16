import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Content from '../components/Content';
import { kebabCase } from '../../src/utils/kebabCase';

const BlogPostTemplate = ({
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
            <h3 className="text-4xl font-semibold leading-normal text-gray-800 dark:text-gray-200 mb-2 text-center">
              {title}
            </h3>
            <h6 className="text-lg mt-2 mb-0 text-gray-400 text-center">
              {description}
            </h6>
            <PostContent
              className="pt-12 prose dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none"
              content={content}
            />
            {tags && tags.length ? (
              <div className="flex flex-wrap items-center mt-0 mb-5 leading-relaxed text-gray-500 dark:text-gray-300">
                <p className="text-lg mr-2 my-2">Tags: </p>
                {tags.map((tag) => (
                  <span
                    className="text-gray-500 dark:text-gray-300 bg-gray-200 text-xs font-bold inline-block py-1 uppercase last:mr-0 mr-1 leading-tight rounded-full px-3"
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

export default BlogPostTemplate;
