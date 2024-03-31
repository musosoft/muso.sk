import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    const { image, title, heading, subheading, description, intro, mainpitch } =
      data;

    return (
      <IndexPageTemplate
        image={getAsset(image)}
        title={title}
        heading={heading}
        subheading={subheading}
        description={description}
        intro={
          intro ? { ...intro, image: getAsset(intro.image) } : { blurbs: [] }
        }
        mainpitch={mainpitch || {}}
        inPreview={true}
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
