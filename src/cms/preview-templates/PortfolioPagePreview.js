import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioPageTemplate } from '../../templates/portfolio-page';

// PortfolioPagePreview.js

const PortfolioPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryWebsitesCards = entry.getIn(['data', 'websites', 'cards']);
  const websitesCards = entryWebsitesCards ? entryWebsitesCards.toJS() : [];

  const entryITCards = entry.getIn(['data', 'it', 'cards']);
  const itCards = entryITCards ? entryITCards.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <PortfolioPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      websites={{ cards: websitesCards }}
      it={{
        heading: entry.getIn(['data', 'it', 'heading']),
        description: entry.getIn(['data', 'it', 'description']),
        cards: itCards,
      }}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
    />
  );
};

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PortfolioPagePreview;
