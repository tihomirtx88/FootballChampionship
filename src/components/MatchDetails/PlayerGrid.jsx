import PositionedPlayer from "../../ui/PositionedPlayer";

export default function PlayerGrid({ players, row, layout, middleColumn }) {
  return players.map((player, index) => (
    <PositionedPlayer
      key={player.ID}
      className="position-player"
      row={row}
      col={layout[index] || middleColumn}
      positionType={player.Position}
    >
      {" "}
      <div className="player-circle" />
      {player.FullName}
      <span>({player.Position})</span>
    </PositionedPlayer>
  ));
}
