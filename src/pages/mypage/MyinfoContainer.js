import React from 'react';
import S from './myinfostyle';
import { Link } from 'react-router-dom';
const MyinfoContainer = () => {
  return (
    <S.Container className='Container'>
    <S.LeftSection className='Wapper'>
      <S.Title className='title'>
        <li>내 정보</li>
      </S.Title>
      <S.Ul>
          <Link to={"/my-list"}>
            <li>내가 쓴 게시판</ li> 
          </Link>
          <Link to={"/my-review-list"}>
            <li>내가 쓴 리뷰</ li> 
          </Link>
          <hr />
      </S.Ul>
    </S.LeftSection>
    
  </S.Container>
  );
};

export default MyinfoContainer;