import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import S from './style';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState('');
  const [score, setScore] = useState('');
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  // 폼 제출 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ title, score, review });

    
    navigate('/movieblog');
  };

  return (
    <div>
      <S.Main>
        <h1>영화 블로그 작성</h1>
          <S.Form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="title">게시글 제목:</label>
              <S.Input>
                <input 
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required></input>
              </S.Input>
            </div>

            <div>
              <label htmlFor="movie">영화 제목:</label>
              <S.Input>
                <input 
                  type="text"
                  id="movie"
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                  required></input>
              </S.Input>
            </div>

            <div>
              <label htmlFor="score">평점:</label>
              <S.Select>
                <select
                id="score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required
                >
                <option value="">선택하세요</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
              </S.Select>
            </div>

            <div>
              <label htmlFor="review">게시글 내용:</label>
                <S.Textarea>
                <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required 
                ></textarea>
                </S.Textarea>
            </div>
          
          <S.Button type="submit">올리기</S.Button> 
        </S.Form>
      </S.Main>
    </div>
  );
};

export default CreateBlog;