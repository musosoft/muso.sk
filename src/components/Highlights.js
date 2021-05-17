import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/fa';

const HighlightGrid = ({ gridItems }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {gridItems.map((item) => {
        return (
          <div className="px-4 relative w-full md:w-6/12" key={item.text}>
            <div
              className={`${item.color} mt-8 rounded-lg text-left p-6 flex items-start`}
            >
              <div className="flex-1">
                <div
                  className={`${item.color} text-white shadow-lg rounded-full justify-center items-center text-center p-2 mx-auto mb-5 inline-flex w-12 h-12`}
                >
                  {React.createElement(FontAwesome[item.icon], { size: '2em' })}
                </div>
                <h4 className="text-2xl font-semibold leading-normal text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-white">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

HighlightGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default HighlightGrid;
