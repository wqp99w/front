import React from 'react';
import MyReview from './MyReview';
import Layout from '../component/Layout';
import MyinfoContainer from '../MyinfoContainer';

const MyReviewContainer = () => {
  return (
    <Layout 
    leftContent={<MyinfoContainer />}
    rightContent={<MyReview />}
  />
  );
};

export default MyReviewContainer;