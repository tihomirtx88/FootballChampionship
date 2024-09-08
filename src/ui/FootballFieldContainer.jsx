import styled from "styled-components";

const FootballFieldContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr); 
  grid-template-columns: repeat(5, 1fr); 
  grid-auto-flow: column;
  gap: 20px; 
  background-color: #4caf50; 
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  height: auto; 
  aspect-ratio: 2 / 3; 
  position: relative;
  border: 3px solid white;
  margin: auto; 
`;

export default FootballFieldContainer;
