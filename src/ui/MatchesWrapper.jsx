import styled from "styled-components";

const MatchesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }

`;

export default MatchesWrapper;
