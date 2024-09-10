import styled from "styled-components";

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export default TeamContainer;