import React from 'react';
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';

const Layout = ({ children }) => {
  return (
    <>
      <TheHeader></TheHeader>
      {children}
      <TheFooter></TheFooter>
    </>
  );
};

export default Layout;
