import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import S from "./style";

const MovieReview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mvid = parseInt(queryParams.get("id"), 10);

  const movies = [
    {
      id: 1,
      title: "뜬금마켓",
      img: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/gwangwhamunlovesong-musical-ko-004-03.jpg?v=1727398714/200x300?",
      detail: "이 영화는 꿈과 희망을 나누는 이야기입니다.",
    },
  
  ];
  const cast = [
    { name: "Marlon Brando", role: "Don Vito Corleone", img: "https://via.placeholder.com/100" },
    { name: "Al Pacino", role: "Michael Corleone", img: "https://via.placeholder.com/100" },
  ];

  const reviews = [
    { id: 1, username: "김*우", date: "2025.01.08", content: "보면서 고민하다가... 너무 아쉬움", isEditable: false },
    { id: 2, username: "이즈잇츠", date: "2025.01.08", content: "재밌게 잘 봤습니다.", isEditable: false },
    { id: 3, username: "익명", date: "2025.01.08", content: "현빈의 역대급은 김삿갓이다.", isEditable: false },

  ];

  const [userReviews, setUserReviews] = useState(reviews);
  const [isWriting, setIsWriting] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const handleAddReview = () => {
    if (newReview.trim() === "") return;

    const newReviewObj = {
      id: Date.now(),
      username: "내 댓글", 
      date: new Date().toISOString().split("T")[0],
      content: newReview,
      isEditable: true,
    };

    setUserReviews([newReviewObj, ...userReviews]);
    setNewReview("");
    setIsWriting(false);
  };

  
  const handleDeleteReview = (id) => {
    setUserReviews(userReviews.filter((review) => review.id !== id));
  };


  const handleEditReview = (id) => {
    setEditingReviewId(id);
    const reviewToEdit = userReviews.find((review) => review.id === id);
    setEditingContent(reviewToEdit.content);
  };

 
  const handleSaveEdit = () => {
    setUserReviews(
      userReviews.map((review) =>
        review.id === editingReviewId
          ? { ...review, content: editingContent }
          : review
      )
    );
    setEditingReviewId(null);
    setEditingContent("");
  };


  const selectedMovie = movies.find((movie) => movie.id === mvid);

  if (!selectedMovie) {
    return <div>해당 영화를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <S.wrapper className="wrapper">
        <S.Card className="mainimage">
          <img src={selectedMovie.img} alt={selectedMovie.title} />
        </S.Card>
        <S.imformation className="imformation">
          <div className="rating">
            <span>★ ★ ★ ★ ★</span>
            <span>4.3</span>
          </div>
          <div className="detail">{selectedMovie.detail}</div>
        </S.imformation>
      </S.wrapper>

      <S.mainpage className="mainpage">
      <div className="actor">
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
        <div className="comment">
          <div className="review">
            <h1>리뷰</h1>
            <div className="reviewbutton">
              <button onClick={() => setIsWriting(!isWriting)}>리뷰 작성</button>
            
            </div>
          </div>

        
          {isWriting && (
            <S.reviewinput className="review-input">
              <input
                placeholder="리뷰를 작성하세요..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button onClick={handleAddReview}>작성 완료</button>
            </S.reviewinput>
          )}

        
          <div className="review-list">
            {userReviews.map((review) => (
              <S.reviewitem key={review.id} className="review-item">
                <div className="review-header">
                  <span>{review.username}</span>
                  <span>{review.date}</span>
                </div>

               
                {editingReviewId === review.id ? (
                  <div>
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>저장</button>
                    <button onClick={() => setEditingReviewId(null)}>취소</button>
                  </div>
                ) : (
                  <div className="review-content">
                    {review.content}
                    {review.isEditable && (
                      <div className="review-actions">
                        <button onClick={() => handleEditReview(review.id)}>수정</button>
                        <button onClick={() => handleDeleteReview(review.id)}>삭제</button>
                      </div>
                    )}
                  </div>
                )}
              </S.reviewitem>
            ))}
          </div>
        </div>
      </S.mainpage>
    </div>
  );
};

export default MovieReview;
