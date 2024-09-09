/* eslint-disable react/prop-types */
import styled from "styled-components";

const ReservesContainer = styled.div`
  margin-top: 20px;
`;

const ReserveTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ReservePlayer = styled.div`
  font-size: 1.2rem;
  padding: 8px 0;
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