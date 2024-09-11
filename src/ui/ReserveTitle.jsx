import styled from "styled-components";

const ReserveTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #343a40;
  border-bottom: 2px solid #ced4da;
  padding-bottom: 6px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

export default ReserveTitle;