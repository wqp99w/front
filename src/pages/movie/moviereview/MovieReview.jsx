import React from 'react';
import { useLocation } from 'react-router-dom';
import S from './style';

const MovieReview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); 
  const mvid = parseInt(queryParams.get("id"), 10); 
  const movies = [
    { id: 1, title: "뜬금마켓", img: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/gwangwhamunlovesong-musical-ko-004-03.jpg?v=1727398714/200x300?",detail:"줄거리" },
    { id: 2, title: "강철부대", img: "movie2.jpg" },
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
  const cast = [
    { name: "Marlon Brando", role: "Don Vito Corleone", img: "https://via.placeholder.com/100" },
    { name: "Al Pacino", role: "Michael Corleone", img: "https://via.placeholder.com/100" },
  ];
  const selectedMovie = movies.find((movie) => movie.id === mvid);
  return (
    <div>
      <S.wrapper className='wrapper'>
        <S.Card className='mainimage'>
          <img src={selectedMovie.img}/>
        </S.Card>
        <S.imformation className='imformation'>
        <div className="rating">
          <span>★ ★ ★ ★ ★</span>
          <span>4.3</span>
        </div>
          <div className='detail'>{selectedMovie.detail}</div>
          </S.imformation>
      </S.wrapper>
      <S.mainpage className='mainpage'>
        <div className='actor'>
          <h1>연기자</h1>
          <S.CastContainer className="cast-container">
        {cast.map((actor, index) => (
          <S.ActorCard key={index} className="actor">
            <img src={actor.img} alt={actor.name} />
            <p>{actor.name}</p>
            <p>{actor.role}</p>
          </S.ActorCard>
        ))}
       </S.CastContainer>
        </div>
        <div className='comment'>
          <div className='review'>
              <h1>리뷰</h1>
            <div className='reviewbutton'>
              <button>리뷰작성</button>
              <button>더보기</button>
            </div>
          </div>
        </div>
      </S.mainpage>
    </div>
  );
};

export default MovieReview;