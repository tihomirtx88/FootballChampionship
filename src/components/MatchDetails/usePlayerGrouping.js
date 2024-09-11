export const usePlayerGrouping = (players) => {
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

  players.forEach((player) => {
    const generalPosition = positionMap[player.Position];
    if (generalPosition && playerGroups[generalPosition]) {
      playerGroups[generalPosition].push(player);
    }
  });

  return playerGroups;
};
