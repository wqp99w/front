import React, { useState } from 'react';
import { useNavigate , NavLink} from 'react-router-dom';

import S from './style';

const MyBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '내가 작성한 영화 리뷰 1',
      content: '이번에 본 영화에 대한 리뷰입니다.'
    },
    {
      id: 2, 
      title: '내가 작성한 영화 추천 글',
      content: '최근 본 영화 중 추천할 만한 작품을 소개합니다.'
    }
  ]);
  const handleCreatePost = () => {
    navigate('/createblog');
  };
  return (
    <S.Container>
      <S.Header>
        <h1>내 게시글</h1>
      </S.Header>
      <S.PostList>
        {posts.map((post) => (
          <S.PostItem key={post.id}>
            <S.PostTitle>
                <a href={`/post/${post.id}`}>{post.title}</a>
            </S.PostTitle>
            <S.PostContent>
                {post.content}
            </S.PostContent>
          </S.PostItem>
        ))}
      </S.PostList>
      <S.CreatePostButton onClick={handleCreatePost}>
        글쓰기
      </S.CreatePostButton>
    </S.Container>
  );
};

export default MyBlog;