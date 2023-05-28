import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    const {
      image,
      title,
      heading,
      description,
      intro,
      mainpitch,
    } = data;

    const imageData = image ? { childImageSharp: { gatsbyImageData: image } } : null;

    return (
      <IndexPageTemplate
        image={imageData}
        title={title}
        heading={heading}
        description={description}
        intro={intro || { blurbs: [] }}
        mainpitch={mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
