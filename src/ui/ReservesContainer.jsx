import styled from "styled-components";

const ReservesContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 15px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export default ReservesContainer;