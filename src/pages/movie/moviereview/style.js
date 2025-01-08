import styled from "styled-components";

const S = {};


S.wrapper = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  padding-top: 43px;
`;


S.imformation = styled.div`
  width: 1000px;
  height: 300px;

  .detail {
    border-top: solid gray;
  }
`;


S.Card = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 300px;
  flex-shrink: 0;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .movie-title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    padding: 5px 0;
    background-color: black;
  }
`;


S.mainpage = styled.div`
  width: 1240px;
  height: 100%;
  margin: auto;

  h1 {
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .reviewbutton {
    display: flex;
    align-items: center;
    justify-content: end;
    min-width: 1240px;
    min-height: 36px;
    border-top: solid gray;

    button {
      color: #ff2f6e;
      background-color: black;
      border: none;
    }
  }
  .review-header{
    span{
      margin-left: 10px;
    }
  }
  .review-content{
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;
S.reviewitem =styled.div`
border-bottom: 1px solid gray;
margin-top: 10px;

`


S.reviewinput=styled.div`
input{
  width: 500px;
  color: black;
}
button{
  background-color: #ff2f6e;
  color: black;
  border: none;
}


`

S.CastContainer = styled.div`
  display: flex;
  width: 1240px;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;


S.ActorCard = styled.div`
  width: 45%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    margin: 0;
  }
`;

export default S;