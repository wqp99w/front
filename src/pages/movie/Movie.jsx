import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style';

const Movie = () => {
  const movies = [
    { id: 1, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
    { id: 1, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
    { id: 1, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
    { id: 1, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
  ];
  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <S.wrapper className='wrapper'>
        {movies.map((movie,id)=>(
          <S.Card key={id}>
          <Link to={`/movie/moviereview`} role="button" onClick={() => window.scrollTo(0, 0)}>
            {movie.mainImage && (
              <img src={movie.img} alt={`Video ${movie}`} />
            )}
          </Link>
        </S.Card>
        ))}
      </S.wrapper>
    </div>
  );
};

export default Movie;