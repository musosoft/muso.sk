import React from 'react';
import Layout from '../../components/Layout';

const Thanks = () => (
  <Layout>
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg mt-12 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love">
                😍
              </span>
            </p>
            <h3 className="font-semibold text-3xl">Thank you</h3>
            <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
              Will get back to you ASAP!
            </p>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="/"
                className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-3 mb-2 bg-dodgerBlue-500 active:bg-dodgerBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Back home
              </a>
              <a
                href="/blog"
                className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
              >
                Check blog
              </a>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default Thanks;
