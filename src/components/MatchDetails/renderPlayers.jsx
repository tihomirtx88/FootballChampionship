import PositionedPlayer from "../../ui/PositionedPlayer";

export const renderPlayers = (players) => {
  const playerGroups = {
    GK: [],
    DF: [],
    MF: [],
    FW: [],
  };

  const totalColumns = 9;
  const middleColumn = Math.ceil(totalColumns / 2);
  const gridItems = [];

  // Group players by their positions
  players.forEach((player) => {
    if (playerGroups[player.Position]) {
      playerGroups[player.Position].push(player);
    }
  });

  const generatePlayerPosition = (player, row, col) => (
    <PositionedPlayer
      key={player.ID}
      className="position-player"
      row={row}
      col={col}
      positionType={player.Position}
    >
      <div className="player-circle" />
      {player?.FullName}
      <span>({player.Position})</span>
    </PositionedPlayer>
  );

  // Generate players for each position
  const generatePositionedPlayers = (arr, row, columns) => {
    arr.forEach((player, index) => {
      const colOffset = columns[index];
      gridItems.push(generatePlayerPosition(player, row, colOffset));
    });
  };

  // Render Goalkeeper
  if (playerGroups.GK.length) {
    generatePositionedPlayers(playerGroups.GK, 4, [middleColumn]);
  }

  // Define column layouts for different numbers of players
  const columnLayouts = {
    2: [4, 6],
    3: [3, 5, 7],
    4: [2, 4, 6, 8],
    5: [2, 3, 5, 7, 8],
  };

  // Render Defenders
  const defCount = playerGroups.DF.length;
  if (columnLayouts[defCount]) {
    generatePositionedPlayers(playerGroups.DF, 3, columnLayouts[defCount]);
  }

  // Render Midfielders
  const midCount = playerGroups.MF.length;
  if (columnLayouts[midCount]) {
    generatePositionedPlayers(playerGroups.MF, 2, columnLayouts[midCount]);
  }

  // Render Forwards
  const strCount = playerGroups.FW.length;
  if (columnLayouts[strCount]) {
    generatePositionedPlayers(playerGroups.FW, 1, columnLayouts[strCount]);
  } else if (strCount === 1) {
    // Handle case where there's only 1 forward
    const player = playerGroups.FW[0];
    gridItems.push(generatePlayerPosition(player, 1, middleColumn));
  }

  return gridItems;

};
