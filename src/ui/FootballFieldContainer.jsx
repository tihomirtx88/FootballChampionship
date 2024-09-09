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
`;

export default FootballFieldContainer;
