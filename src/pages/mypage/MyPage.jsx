import React from 'react';
import S from '../mypage/style';

const MyPage = () => {
  return (
    <S.RightSection>
      <p className='infoTitle'>개인정보 변경</p>
          <S.changepassword className='changepassword'>
            <label>
              <S.Input
                type="password"
                name='password'
                placeholder='새로운 비밀 번호'
              />
            </label>
              </S.changepassword>
            <S.changepassword>
              <label>
                <S.Input
                  type="password"
                  name='password'
                  placeholder='새로운 비밀 번화 확인'
                />
              </label>
            </S.changepassword>
            <S.changepassword>
              <label>
                <S.Input
                  type="text"
                  name='phoneNumber'
                  placeholder='전화번호 변경'
                />
              </label>
            </S.changepassword>
          <S.ButtonBox className='buttonBox'>
            <S.ChangeButton type="submit">
              변경 완료
            </S.ChangeButton>
          </S.ButtonBox>
          <S.Button >
        회원 탈퇴
         </S.Button>
    </S.RightSection>
  );
};

export default MyPage;
