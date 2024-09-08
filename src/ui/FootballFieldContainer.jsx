import styled from "styled-components";

const FootballFieldContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background-color: #4caf50; 
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  position: relative;
  border: 2px solid white; 
`;

export default FootballFieldContainer;
