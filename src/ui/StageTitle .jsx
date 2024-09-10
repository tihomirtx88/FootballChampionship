import styled from "styled-components";

const StageTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }
`;

export default StageTitle;
