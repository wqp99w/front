import styled from "styled-components";

const S = {};
S.Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

S.Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  div {
    a {
      margin-left: 20px;
      color: #007bff;
      text-decoration: none;
      font-size: 16px;

      &:hover {
        color: #0056b3;
      }
    }
  }
`;

S.PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

S.PostItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

S.PostTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }
`;

S.PostContent = styled.p`
  color: #666;
  line-height: 1.5;
`;

S.CreatePostButton = styled.button`
  display: block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default S;