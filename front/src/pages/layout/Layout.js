import React from 'react';
import {Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import S from './style';


const Layout = () => {

  return (
    <div>
        <S.Backgrond>
          <p>4조 미니 프로젝트 시작</p>
        </S.Backgrond>
        {/* 메인 */}
        {/* <S.main className="main">
          <Outlet />
        </S.main> */}

      {/* 푸터 */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;