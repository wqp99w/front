import React, { useState } from 'react';
import styled from 'styled-components';
import S from './style';

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNunber, setPhonNumber]= useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 추가
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다!');
      return;
    }

    // 회원가입 로직 추가
    console.log('회원가입:', { email, password });
    setError(''); // 에러 메시지 초기화
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
          
          <S.password>
          <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </S.password>

          {error && <div style={{color:'red'}}>{error}</div>}
          
          <S.PhoneNumber>
            <input
              type="phoneNunber"
              placeholder="전화번호"
              value={phoneNunber}
              onChange={(e) => setPhonNumber(e.target.value)}
              required
            />
          </S.PhoneNumber>

          <S.signUp>
            <button type="submit">가입하기</button>
          </S.signUp>
        </form>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default SignUp;