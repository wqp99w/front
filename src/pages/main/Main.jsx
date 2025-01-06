import React from 'react';
import S from './style';

const Main = () => {
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
            <S.MainContent className="main-content">
        <div className="movie-container">
          <S.title className='title'>
            <h2>상영</h2><h2 className='back'>무비</h2>
          </S.title>
          <div className="movie-list">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <img src={movie.img} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="post-container">
        <S.title className='title'>
            <h2>영화</h2><h2 className='back'>게시판</h2>
          </S.title>
          <div className="post-list">
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                <img src={post.img} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </S.MainContent>
    </div>
  );
};

export default Main;