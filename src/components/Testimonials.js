import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Testimonials = ({ testimonials }) => (
  <div className="flex justify-center w-full space-x-4">
    {testimonials.map((testimonial) => (
      <div
        key={v4()}
        className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
      >
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
          <p className="mt-2 text-gray-600">{testimonial.quote}</p>
        </div>
        <div className="flex justify-end mt-4">
          <cite className="text-xl font-medium text-indigo-500">
            {testimonial.author}
          </cite>
        </div>
      </div>
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
