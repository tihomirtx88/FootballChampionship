/* eslint-disable react/prop-types */
import styled from "styled-components";
import ReservesContainer from "../../ui/ReservesContainer";
import ReserveTitle from "../../ui/ReserveTitle";
import ReservePlayer from "../../ui/ReservePlayer";

const PlayerName = styled.span`
  font-weight: 500;
  color: #495057;
`;

const PlayerPosition = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: #6c757d;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default function Reserves({ players }) {
  return (
    <ReservesContainer>
      <ReserveTitle>Reserves:</ReserveTitle>
      {players.slice(11).map((player, index) => (
        <ReservePlayer key={index}>
          <PlayerName>{player?.FullName}</PlayerName>
          <PlayerPosition>({player?.Position})</PlayerPosition>
        </ReservePlayer>
      ))}
    </ReservesContainer>
  );
}
