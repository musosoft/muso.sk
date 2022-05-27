import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const HighlightGrid = ({ gridItems }) => {
  return (
    <div className="items-center flex flex-wrap -mx-4">
      {gridItems.map((item) => {
        return (
          <div
            className="ml-auto text-left mt-6 px-4 relative w-full lg:w-4/12"
            key={item.title}
          >
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg text-white"
              style={{ backgroundColor: '#' + item.color }}
            >
              <GatsbyImage
                image={item.image.childImageSharp.gatsbyImageData}
                alt=""
                className="w-full flex-shrink-0 rounded-t-lg"
              />
              <blockquote className="p-6 relative mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="block w-full absolute text-slate-700 h-95-px -top-94-px left-0"
                >
                  <polygon
                    points="0,52 583,95 0,95"
                    className="fill-current"
                    style={{ color: '#' + item.color }}
                  ></polygon>
                  <polygon
                    points="0,42 583,95 683,0 0,95"
                    opacity=".2"
                    className="fill-current"
                    style={{ color: '#' + item.color }}
                  ></polygon>
                </svg>
                <h4 className="text-2xl font-semibold leading-normal text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-white">{item.text}</p>
              </blockquote>
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
      text: PropTypes.string,
    })
  ),
};

export default HighlightGrid;
