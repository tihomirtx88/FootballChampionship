import styled from "styled-components";

const ManagerName = styled.h3`
  font-size: 1.5rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export default ManagerName;