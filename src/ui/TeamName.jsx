import styled from "styled-components";

const TeamName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export default TeamName;
