import styled from "styled-components";

const MatchCard = styled.div`
  background-color: #ffffff;
  width: 300px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 250px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 200px;
    padding: 10px;
  }
`;

export default MatchCard;
