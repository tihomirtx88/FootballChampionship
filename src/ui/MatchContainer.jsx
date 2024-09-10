import styled from "styled-components";

const MatchContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (max-width: 1200px) {
    padding: 15px;
    max-width: 90%; 
  }

  @media (max-width: 840px) {
    padding: 10px;
    max-width: 100%; 
  }

  @media (max-width: 480px) {
    max-width: 100%;  
    padding: 0;
  }
`;

export default MatchContainer;
