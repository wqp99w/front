import React from 'react';
import S from './style';

const MyReview = () => {
  const reviews = [
    { 
      id: 1, 
      username: "내 댓글", 
      date: "2025.01.08", 
      content: "보면서 고민하다가... 너무 아쉬움", 
      isEditable: false, 
      movieTitle: "영화 제목 1" 
    },
    { 
      id: 2, 
      username: "내 댓글", 
      date: "2025.01.08", 
      content: "재밌게 잘 봤습니다.", 
      isEditable: false, 
      movieTitle: "영화 제목 2" 
    },
    { 
      id: 3, 
      username: "내 댓글", 
      date: "2025.01.08", 
      content: "현빈의 역대급은 김삿갓이다.", 
      isEditable: false, 
      movieTitle: "영화 제목 3" 
    },
  ];

  return (
    <S.RightSection>
      <div className="review-list">
        {reviews.map((review) => (
          <S.reviewitem key={review.id} className="review-item">
          
            <div className="movie-title">
              <h3>{review.movieTitle}</h3>
            </div>
            
          
            <div className="review-header">
              <span>{review.username}</span>
              <span>{review.date}</span>
            </div>
            
        
            <div className="review-content">
              <p>{review.content}</p>
            </div>
          </S.reviewitem>
        ))}
      </div>
    </S.RightSection>
  );
};

export default MyReview;
