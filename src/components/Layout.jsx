import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TemplateWrapper = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white font-poppins">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
