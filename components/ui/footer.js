import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="border-t border-gray-600 text-center">
      <p className="text-gray-600">
        Oregon Software Consulting Group © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
