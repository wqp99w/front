import React from 'react';
import {NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';
import S from './style';


const Layout = () => {
  const navigate = useNavigate();
  const movies = [
    { id: 1, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
  ];
  
  const posts = [
    {
      id: 1,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 2,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 3,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
  ];

  return (
    <div>
      <S.Background className="background">
      <S.Header className="header">
      <NavLink to={"/"}>
          <h1>Nouvelle Vague</h1>
        </NavLink>
        <NavLink to={"/movie"}>
          <p>영화</p>
        </NavLink>
        <NavLink to={"/weekmovie"}>
          <p>이달의 영화</p>
        </NavLink>
        <NavLink to={"/movieblog"}>
          <p>영화 블로그</p>
        </NavLink>
        <NavLink to={"/mypage"}>
          <p>마이 페이지</p>
        </NavLink>
        <div className="search-bar">
          <input type="text" placeholder="Search contents, people, collections, ..." />
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </S.Header>
      <S.Main className="main">
          <Outlet />
        </S.Main>
    </S.Background>
    
      {/* 푸터 */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;