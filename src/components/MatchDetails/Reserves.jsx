/* eslint-disable react/prop-types */
import styled from "styled-components";

const ReservesContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;  
  }

  @media (max-width: 480px) {
    margin-top: 10px; 
  }
`;

const ReserveTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;  
    margin-bottom: 8px;  
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;  
    margin-bottom: 6px;  
  }
`;

const ReservePlayer = styled.div`
  font-size: 1.2rem;
  padding: 8px 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;  
    padding: 6px 0;  
  }

  @media (max-width: 480px) {
    font-size: 1rem; 
    padding: 4px 0;  
  }
`;

export default function Reserves({players }){
    return (
        <ReservesContainer>
          <ReserveTitle>Reserves:</ReserveTitle>
          {players.slice(11).map((player, index) => (
            <ReservePlayer key={index}>
              {player?.FullName} ({player.Position})
            </ReservePlayer>
          ))}
        </ReservesContainer>
      );
};