import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import S from './style';

const MovieBlog = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '영화 리뷰 - 어벤져스: 엔드게임',
      content: '이번에 개봉한 어벤져스: 엔드게임은 마블 시네마틱 유니버스의 대미를 장식하는 작품입니다. 캐릭터들의 감동적인 이야기와 화려한 액션 장면이 인상깊었습니다.'
    },
    {
      id: 2,
      title: '영화 추천 - 기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
  ]);

  const handleMyBlogClick = () =>{
    if(!isLoggedIn){
      navigate("/is-not-login");
    }else{
      navigate("/myblog");
    }
  }

  return (
    <S.Container>
      <S.Header>
        <h1>영화 리뷰 게시판</h1>
        <div>
          <button onClick={handleMyBlogClick}>내 게시판</button>
        </div>
      </S.Header>
      <S.PostList>
        {posts.map((post) => (
          <S.PostItem key={post.id}>
            <S.PostTitle><a href={`/post/${post.id}`}>{post.title}</a></S.PostTitle>
            <S.PostContent>{post.content}</S.PostContent>
          </S.PostItem>
        ))}
      </S.PostList>
    </S.Container>
  );
};

export default MovieBlog;