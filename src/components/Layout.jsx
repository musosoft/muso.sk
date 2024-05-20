import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white font-poppins">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
