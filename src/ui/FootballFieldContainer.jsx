import styled from "styled-components";

const FootballFieldContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 5px repeat(8, 1fr);
  gap: 20px;
  background-color: #4caf50;
  padding: 25px;
  border-radius: 15px;
  /* width: 90%; */
  width: 650px;
  height: auto;
  aspect-ratio: 2 / 3;
  position: relative;
  border: 3px solid white;
  margin: auto;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 80%;
    padding: 20px;
  }

  @media (max-width: 840px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 650px) {
    gap: 0;
    grid-template-columns: 5px repeat(7, 1fr);
  }

  @media (max-width: 480px) {
    width: 100%;
    grid-template-rows: repeat(7, 1fr);
 
  }
`;

export default FootballFieldContainer;
