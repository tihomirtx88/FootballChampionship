import styled from "styled-components";

const Stage = styled.div`
  margin: 30px auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    margin: 20px auto;
    gap: 15px;
  }

  @media (max-width: 480px) {
    margin: 15px auto;
    gap: 10px;
  }
`;

export default Stage;
