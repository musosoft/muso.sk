import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div className="flex items-center justify-center w-screen h-[75vh]">
      <div className="px-40 py-20 bg-white dark:bg-gray-800 rounded-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-dodgerBlue-500 text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-200 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>
          <p className="mb-8 text-center text-gray-500 dark:text-gray-300 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>
          <a
            href="/"
            className="px-6 py-2 text-sm font-semibold text-gray-100 bg-dodgerBlue-500"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
