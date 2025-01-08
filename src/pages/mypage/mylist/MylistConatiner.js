import React from 'react';
import Layout from '../component/Layout';
import MyinfoContainer from '../MyinfoContainer';
import MyList from './MyList';

const MylistConatiner = () => {
  return (
    <Layout 
    leftContent={<MyinfoContainer />}
    rightContent={<MyList />}
  />
  );
};

export default MylistConatiner;