import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/fa';

const FeatureGrid = ({ gridItems }) => {
  return (
    <div className="flex flex-wrap">
      {gridItems.map((item) => {
        return (
          <div
            key={item.text}
            className="pt-8 w-full md:w-4/12 px-4 text-center"
          >
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div
                  className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${item.color}`}
                >
                  {React.createElement(FontAwesome[item.icon], { size: '2em' })}
                </div>
                <h6 className="text-xl font-semibold">{item.title}</h6>
                <p className="mt-2 mb-4 text-gray-600 dark:text-gray-400">{item.text}</p>
                <a
                  href={item.link}
                  className={`${item.color} active:opacity-80 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150`}
                  type="button"
                >
                  {item.button}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
};

export default FeatureGrid;
