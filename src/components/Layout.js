import React from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TemplateWrapper = ({ children }) => {
  return (
    <div className="bg-white font-poppins">
      {/* eslint-disable-next-line */}
      <SEO />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
