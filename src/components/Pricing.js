import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ data }) => (
  <div className="w-full px-4">
    <div className="flex flex-wrap">
      {data.map((price) => (
        <div
          key={price.plan}
          className="md:w-6/12 lg:w-3/12 px-12 md:px-4 mx-auto"
        >
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-600 overflow-hidden">
            <div className="flex-auto">
              <div className="">
                <h6 className="text-xl mt-5 mb-3 font-semibold text-white text-center">
                  {price.plan}
                </h6>
              </div>
              <div className=" text-gray-600 bg-gradient-to-b from-white to-gray-400 clip polygon b-3">
                <ul class="py-8 px-2">
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
                <div className="bg-blue-600 text-white clip polygon b-3">
                  <div className="pt-12 pb-6 px-2">{price.description}</div>
                  <div className="text-center px-3 pb-6 text-3xl">
                    {price.price}
                  </div>
                </div>
              </div>
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
