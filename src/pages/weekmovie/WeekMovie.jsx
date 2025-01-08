import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const WeekMovie = () => {
  const movies = [
    { id: 1, title: "뜬금마켓", img: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/gwangwhamunlovesong-musical-ko-004-03.jpg?v=1727398714/200x300?" },
    { id: 2, title: "강철부대", img: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/contents-detail-image-moulin-rouge-the-musical-10.jpg?v=1678248215/200x300?" },
    { id: 3, title: "런닝맨", img: "movie3.jpg" },
    { id: 4, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 5, title: "나 혼자 산다", img: "movie5.jpg" },
    { id: 6, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 7, title: "강철부대", img: "movie2.jpg" },
    { id: 8, title: "런닝맨", img: "movie3.jpg" },
    { id: 9, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 10, title: "나 혼자 산다", img: "movie5.jpg" },
    { id: 11, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 12, title: "강철부대", img: "movie2.jpg" },
    { id: 13, title: "런닝맨", img: "movie3.jpg" },
    { id: 14, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 15, title: "나 혼자 산다", img: "movie5.jpg" },
    { id: 16, title: "뜬금마켓", img: "movie1.jpg" },
    { id: 17, title: "강철부대", img: "movie2.jpg" },
    { id: 18, title: "런닝맨", img: "movie3.jpg" },
    { id: 19, title: "지옥에서 온", img: "movie4.jpg" },
    { id: 20, title: "나 혼자 산다", img: "movie5.jpg" },
  ];


  const getRandomMovies = (movies, count) => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomMovies(movies, 5);

  return (
    <div>
      <S.MainContent className="main-content">
            <div className="movie-container">
              <S.title className='title'>
                <h2>이달의</h2><h2 className='back'>인기영화</h2>
              </S.title>
              <div className="movie-list">
              {randomMovies.map((movie) => (
          <S.Card key={movie.id}>
            <Link
              to={`/movie/moviereview?id=${movie.id}`}
              role="button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="image-container">
                <img src={movie.img} alt={`Video ${movie.title}`} />
              </div>
              <p className="movie-title">{movie.title}</p>
            </Link>
          </S.Card>
        ))}
              </div>
            </div>
            <div className="movie-container">
              <S.title className='title'>
                <h2>이달의</h2><h2 className='back'>추천</h2>
              </S.title>
              <div className="movie-list">
              {randomMovies.map((movie) => (
          <S.Card key={movie.id}>
            <Link
              to={`/movie/moviereview?id=${movie.id}`}
              role="button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="image-container">
                <img src={movie.img} alt={`Video ${movie.title}`} />
              </div>
              <p className="movie-title">{movie.title}</p>
            </Link>
          </S.Card>
        ))}
              </div>
            </div>
          </S.MainContent>
    </div>
  );
};

export default WeekMovie;
