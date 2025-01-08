import React from 'react';
import MyPage from './MyPage';
import MyinfoContainer from './MyinfoContainer';
import Layout from './component/Layout';

const MyPageContainer = () => {
  return (
    <Layout 
      leftContent={<MyinfoContainer />}
      rightContent={<MyPage />}/>
  );
};

export default MyPageContainer;