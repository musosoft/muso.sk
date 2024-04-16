import React from 'react';
import PropTypes from 'prop-types';
import { HiCheckCircle } from "react-icons/hi";

const Pricing = ({ data }) => (
  <div className="w-full px-4">
    <div className="flex flex-wrap">
      {data.map((price) => (
        <div
          key={price.plan}
          className="md:w-6/12 lg:w-3/12 px-4 sm:px-12 md:px-4 mx-auto"
        >
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-600 overflow-hidden">
            <div className="flex-auto max-w-80 mx-auto">
              <div className="">
                <h6 className="text-2xl mt-5 mb-3 font-semibold text-white text-center">
                  {price.plan}
                </h6>
              </div>
              <div className="text-gray-600 dark:text-gray-400 bg-blue-600">
                <ul className="px-4">
                  {price.items.map((item) => (
                    <li key={item} className="mt-4 flex place-items-center text-gray-100">
                      <HiCheckCircle />
                      <p className="ml-3 text-base font-medium">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-600  text-white ">
                  <div className="pt-6 pb-6 px-4">{price.description}</div>
                  <div className="text-center pt-6 px-3 pb-6 text-3xl">
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
    }),
  ),
};

export default Pricing;
