import React from 'react';
import S from './style';


const MyList = () => {
  const posts = [
    {
      id: 1,
      title: "인천행",
      description: "지하철 타고 떠나는 나홀로 인천 당일치기 여행.",
      img: "post1.jpg",
    },
    {
      id: 2,
      title: "서울의 밤",
      description: "서울 야경을 즐길 수 있는 핫플레이스를 소개합니다.",
      img: "post2.jpg",
    },
    {
      id: 3,
      title: "한강에서",
      description: "한강에서 자전거 타며 즐긴 하루.",
      img: "post3.jpg",
    },
  ];

  return (
    <S.RightSection>
      <div className='title'>
        <h1>내가 쓴 게시판</h1>
        <p className="post-count">전체 글 {posts.length}</p>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <img src={post.img} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </S.RightSection>
  );
};

export default MyList;
