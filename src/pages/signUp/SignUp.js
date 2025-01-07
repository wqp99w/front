import React, { useState } from 'react';
import styled from 'styled-components';
import S from './style';

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 추가
    console.log('회원가입:', { email, password });
    onClose(); // 모달 닫기
  };

  return (
    <S.ModalBackground className='Modal-back'>
      <S.ModalContainer className='Modal-con'>
        <div>회원가입</div>
        <S.close className='close'>
          <button onClick={onClose}>닫기</button>
        </S.close>
        
        <form onSubmit={handleSubmit}>
          <S.email> 
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.email>
          <S.password>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.password>
          <S.signUp>
            <button type="submit">가입하기</button>
          </S.signUp>
        </form>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default SignUp;