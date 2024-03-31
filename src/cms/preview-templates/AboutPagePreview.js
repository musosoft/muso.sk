import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    const { title, location, position, heading, image } = data;

    const imageData = image
      ? { childImageSharp: { gatsbyImageData: image } }
      : null;

    return (
      <AboutPageTemplate
        title={title}
        location={location}
        position={position}
        heading={heading}
        image={imageData}
        content={widgetFor('body')}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
