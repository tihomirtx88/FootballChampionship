import { useEffect, useState } from "react";
import PositionedPlayer from "../../ui/PositionedPlayer";

export const useRenderPlayers = (players) => {

  const [totalColumns, setTotalColumns] = useState(9);
  const [columnLayouts, setColumnLayouts] = useState({
    1: [5],
    2: [4, 6],
    3: [3, 5, 7],
    4: [2, 4, 6, 8],
    5: [2, 3, 5, 7, 8],
    6: [2, 3, 4, 6, 7, 8],
    7: [1, 3, 4, 5, 6, 7, 8],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
        setIsMobile(true);
        setTotalColumns(7);
        setColumnLayouts({
          1: [5],
          2: [4, 6],
          3: [3, 5, 7],
          4: [2, 4, 6, 8],
          5: [1, 3, 4, 5, 7],
          6: [1, 2, 3, 5, 6, 7],
          7: [1, 2, 3, 4, 5, 6, 7],
        });
      } else {
        setIsMobile(false);
        setTotalColumns(9);
        setColumnLayouts({
          1: [5],
          2: [4, 6],
          3: [3, 5, 7],
          4: [2, 4, 6, 8],
          5: [2, 3, 5, 7, 8],
          6: [2, 3, 4, 6, 7, 8],
          7: [1, 3, 4, 5, 6, 7, 8],
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    FW: "FW",
  };

  const playerGroups = {
    GK: [],
    DF: [],
    MF: [],
    FW: [],
  };

  const middleColumn = Math.ceil(totalColumns / 2);

  const gridItems = [];

  //Here i group players by there position
  players.forEach((player) => {
    const generalPosition = positionMap[player.Position];

    if (generalPosition && playerGroups[generalPosition]) {
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

    
    const generateDefenders = (defenders) => {
      if (isMobile && defenders.length > 4) {
        const half = Math.ceil(defenders.length / 2);
        const firstRowDefenders = defenders.slice(0, half);
        const secondRowDefenders = defenders.slice(half);
  
        generatePlayers(firstRowDefenders, 5); 
        generatePlayers(secondRowDefenders, 6); 
      } else {
        generatePlayers(defenders, 5); 
      }
    };

    const generateMidfelders = (midflelders) => {
      if (isMobile && midflelders.length > 4) {
        const half = Math.ceil(midflelders.length / 2);
        const firstRowDefenders = midflelders.slice(0, half);
        const secondRowDefenders = midflelders.slice(half);
  
        generatePlayers(firstRowDefenders, 3); 
        generatePlayers(secondRowDefenders, 4); 
      } else {
        generatePlayers(midflelders, 3); 
      }
    };

    const generateStrikers = (strikers) => {
      if (isMobile && strikers.length > 4) {
        const half = Math.ceil(strikers.length / 2);
        const firstRowDefenders = strikers.slice(0, half);
        const secondRowDefenders = strikers.slice(half);
  
        generatePlayers(firstRowDefenders, 1); 
        generatePlayers(secondRowDefenders, 2); 
      } else {
        generatePlayers(strikers, 2); 
      }
    };

  generatePlayers(playerGroups.GK, 7);
  generateDefenders(playerGroups.DF);
  generateMidfelders(playerGroups.MF);
  generateStrikers(playerGroups.FW);


  return gridItems;
};
