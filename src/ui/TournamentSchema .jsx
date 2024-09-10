import styled from "styled-components";

const TournamentSchema = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export default TournamentSchema;
