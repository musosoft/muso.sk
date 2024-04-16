import React from 'react';
import PropTypes from 'prop-types';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import * as FontAwesome from 'react-icons/fa';
import { FcCommandLine } from 'react-icons/fc';

const PortfolioPageTemplate = ({
  image,
  subheading,
  heading,
  description,
  websites,
  it,
  testimonials,
  pricing,
  helmet,
}) => (
  <>
    <section className="container mx-auto px-4 py-12">
      {helmet || ''}
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="px-4 relative w-full text-center">
          <h2 className="text-4xl font-bold mt-3 mb-3 text-gray-700 dark:text-gray-300">
            {heading}
          </h2>
          <p className="mt-2 mb-4 text-xl leading-relaxed text-slate-400">
            {subheading}
          </p>
        </div>
      </div>
      <div className="items-center flex flex-wrap -mx-4">
        <div className="mr-auto px-4 relative w-full">
          <Highlights gridItems={websites.cards} />
        </div>
      </div>
    </section>
    <section className="pb-6 bg-gray-300 dark:bg-gray-900 slant-tl-3 slant-br-3">
      <div className="container mx-auto px-4">
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-40">
              <div className="text-gray-600 dark:text-gray-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-gray-800">
                <FcCommandLine size="3em" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {it.heading}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-300">
                {it.description}
              </p>
            </div>

            <div className="w-full md:w-8/12 px-4 mt-20">
              <div className="flex flex-wrap gap-8 min-w-0 mb-6">
                {it.cards.map((icon) => (
                  <div
                    key={icon.title}
                    className="bg-white dark:bg-gray-800 w-full sm:w-56 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                  >
                    <div
                      className="flex items-center py-2 px-4 bg-[color:var(--icon-color)] text-white"
                      style={{ '--icon-color': icon.color }}
                    >
                      {React.createElement(FontAwesome[icon.icon], {
                        size: '4em',
                        className: 'w-4/12',
                      })}
                      <h3 className="w-8/12 ml-3 font-semibold">
                        {icon.title}
                      </h3>
                    </div>
                    <p className="mt-2 pb-4 text-sm px-4">{icon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-4 md:pt-16 pb-8 relative dark:bg-gray-700 slant-tl-3 -mt-3">
      <div className="px-4 relative w-full text-center">
        <h2 className="text-4xl font-bold mt-3 mb-3 text-gray-700 dark:text-gray-300">
          Testimonials
        </h2>
        <p className="mt-2 mb-4 text-xl leading-relaxed text-slate-400">
          What people say
        </p>
      </div>
      <Testimonials testimonials={testimonials} />
    </section>
    <section className="pt-48 md:pt-16 pb-40 bg-gray-200 dark:bg-gray-800 slant-tl-3">
      <div className="pt-12 pb-4 relative w-full text-center">
        <h2 className="text-4xl font-bold mt-3 mb-3 text-gray-700 dark:text-gray-300">Pricing</h2>
        <p className="mt-2 mb-4 text-xl leading-relaxed text-slate-400">
          What people pay
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <Pricing data={pricing.plans} />
        </div>
      </div>
    </section>
  </>
);

PortfolioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  websites: PropTypes.shape({
    cards: PropTypes.array,
  }),
  it: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    cards: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

export default PortfolioPageTemplate;
