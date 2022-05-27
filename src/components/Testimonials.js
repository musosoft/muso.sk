import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Testimonials = ({ testimonials }) => (
  <div className="flex justify-center w-full flex-wrap">
    {testimonials.map((testimonial) => (
      <figure
        key={v4()}
        className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 border border-gray-50"
      >
        <div className="w-full pt-1 pb-5">
          <div
            className={`overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex items-center justify-center ${testimonial.background}`}
          >
            <span className="text-white text-4xl">
              {testimonial.author.split(' ').shift().charAt(0) +
                testimonial.author.split(' ').pop().charAt(0)}
            </span>
          </div>
        </div>
        <blockquote className="w-full mb-10">
          <div className="text-3xl text-left leading-tight h-2">“</div>
          <p className="text-sm text-gray-600 text-center px-5">
            {testimonial.quote}
          </p>
          <div className="text-3xl text-right leading-tight h-3 -mt-3">”</div>
        </blockquote>
        <figcaption className="w-full text-center">
          <p className="text-md font-bold text-center">{testimonial.author}</p>
          <cite className="text-xs text-gray-500 text-center">
            {testimonial.company}
          </cite>
        </figcaption>
      </figure>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
