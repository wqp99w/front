import React from 'react';
import {Outlet } from 'react-router-dom';


import Footer from './footer/Footer';


const Layout = () => {

  return (
    <div>

        {/* 메인 */}
        <S.main className="main">
          <Outlet />
        </S.main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Layout;