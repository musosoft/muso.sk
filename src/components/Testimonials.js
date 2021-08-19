import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Testimonials = ({ testimonials }) => (
  <div className="flex justify-center w-full space-x-4">
    {testimonials.map((testimonial) => (
      <figure
        key={v4()}
        className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 border border-gray-50"
      >
        <div class="w-full pt-1 pb-5">
          <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img src={testimonial.photo} alt="" />
          </div>
        </div>
        <blockquote class="w-full mb-10">
          <div class="text-3xl text-left leading-tight h-2">“</div>
          <p class="text-sm text-gray-600 text-center px-5">
            {testimonial.quote}
          </p>
          <div class="text-3xl text-right leading-tight h-3 -mt-3">”</div>
        </blockquote>
        <figcaption class="w-full text-center">
          <p class="text-md font-bold text-center">{testimonial.author}</p>
          <cite class="text-xs text-gray-500 text-center">
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
