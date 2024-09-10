import PositionedPlayer from "../../ui/PositionedPlayer";

export const renderPlayers = (players) => {
  const positionMap = {
    GK: "GK",
    CB: "DF",
    RB: "DF",
    LB: "DF",
    DF: "DF",
    RWB: "DF",
    LWB: "DF",
    CM: "MF",
    CDM: "MF",
    CAM: "MF",
    MF: "MF",
    RM: "MF",
    LM: "MF",
    ST: "FW",
    CF: "FW",
    RF: "FW",
    LF: "FW",
    RW: "FW",
    LW: "FW",
    FW: "FW"
  };

  const playerGroups = {
    GK: [],
    DF: [],
    MF: [],
    FW: [],
  };

  const totalColumns = 9;
  const middleColumn = Math.ceil(totalColumns / 2);

  // The key is a index and the value position in the grid system
  const columnLayouts = {
    1: [middleColumn],
    2: [4, 6],
    3: [3, 5, 7],
    4: [2, 4, 6, 8],
    5: [2, 3, 5, 7, 8],
    6: [2, 3, 4, 6, 7, 8],
    7: [1, 3, 4, 5, 6, 7, 8,]
  };
  const gridItems = [];

  //Here i group players by there position
  players.forEach((player) => {
  
    const generalPosition = positionMap[player.Position];
    
    if (generalPosition  && playerGroups[generalPosition]) {
      playerGroups[generalPosition].push(player);
    }
  });


  // Generate players for each position
  const generatePlayers = (players, row) => {

    const layout = columnLayouts[players.length] || [];

    players.forEach((player, index) => {
      gridItems.push(
        <PositionedPlayer
          key={player.ID}
          className="position-player"
          row={row}
          col={layout[index] || middleColumn}
          positionType={player.Position}
        >
          <div className="player-circle" />
          {player.FullName}
          <span>({player.Position})</span>
        </PositionedPlayer>
      );
    });
  };

  generatePlayers(playerGroups.GK, 4); 
  generatePlayers(playerGroups.DF, 3); 
  generatePlayers(playerGroups.MF, 2); 
  generatePlayers(playerGroups.FW, 1); 

  return gridItems;

};
