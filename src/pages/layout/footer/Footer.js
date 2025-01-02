import React from 'react';
import S from './style';


const Footer = () => {

  return (
    <footer>
      <S.Footer className='Footer'>
        <p>Copyright © 2022 TicketBooker. All rights reserved.</p>
        <p className='faq' onClick={() => navigator('/faq')}>자주 묻는 질문</p>
      </S.Footer>
    </footer>
  );
};

export default Footer;