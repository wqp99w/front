import React, { useState } from 'react';
import styled from 'styled-components';
import S from './style';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 추가
    console.log('로그인:', { email, password });
    onClose(); // 모달 닫기
  };

  return (
    <S.ModalBackground className='Modal-back'>
      <S.ModalContainer className='Modal-con'>
        <div>로그인</div>
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
            <S.login>
              <button type="submit">로그인하기</button>
            </S.login>
        </form>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Login;