import styled from "styled-components";

const S = {};

S.wrapper = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding-top: 43px;
`;

S.Card = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 340px; /* 높이를 자동으로 조정 */
  flex-shrink: 0;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */

  /* 이미지 */
  .image-container {
    width: 100%;
    height: 310px; /* 이미지의 고정 높이 */
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  /* 영화 제목 */
  .movie-title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    padding: 5px 0;
    background-color: black;
  }
`;


export default S;
