import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    const { description, tags, title } = data;

    return (
      <BlogPostTemplate
        description={description}
        tags={tags}
        title={title}
        content={widgetFor('body')}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
