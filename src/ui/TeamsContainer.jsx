import styled from "styled-components";

const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 40px;
  border-top: 2px solid #e0e0e0;
  flex-wrap: wrap;
  padding-top: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;  
    align-items: center;
  }

  @media (max-width: 840px) {
    margin-top: 30px;
    padding-top: 30px;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`;

export default TeamsContainer;