import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ data }) => (
  <div className="w-full md:w-6/12 px-4">
    <div className="flex flex-wrap">
      {data.map((price) => (
        <div key={price.plan} className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap"></i>
              </div>
              <h6 className="text-xl mb-1 font-semibold">{price.plan}</h6>
              <p className="mb-4 text-gray-600">
                <ul>
                  {price.items.map((item) => (
                    <li key={item} className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-teal-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="my-2">{price.description}</div>
                <div className="text-3xl">{price.price} €</div>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
