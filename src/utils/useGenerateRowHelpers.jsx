import PositionedPlayer from "../ui/PositionedPlayer";

export const generatePlayers = (players, row, columnLayouts, middleColumn) => {

    return players.map((player, index) => (
      <PositionedPlayer
        key={player.ID} 
        className="position-player"
        row={row}
        col={columnLayouts[players.length][index] || middleColumn}
        positionType={player.Position}
      >
        <div className="player-circle" />
        {player.FullName}
        <span>({player.Position})</span>
      </PositionedPlayer>
    ));
    
};

export const generateDefenders = (defenders, isMobile, columnLayouts, middleColumn) => {
    if (isMobile && defenders.length > 4) {
        const half = Math.ceil(defenders.length / 2);
        const firstRowDefenders = defenders.slice(0, half);
        const secondRowDefenders = defenders.slice(half);
    
        return (
          <>
            {generatePlayers(firstRowDefenders, 5, columnLayouts, middleColumn)}
            {generatePlayers(secondRowDefenders, 6, columnLayouts, middleColumn)}
          </>
        );
      }
      return generatePlayers(defenders, 5, columnLayouts, middleColumn);
};

export const generateMidfielders = (midfielders, isMobile, columnLayouts, middleColumn) => {
    if (isMobile && midfielders.length > 4) {
      const half = Math.ceil(midfielders.length / 2);
      const firstRowMidfielders = midfielders.slice(0, half);
      const secondRowMidfielders = midfielders.slice(half);
  
      return (
        <>
          {generatePlayers(firstRowMidfielders, 3, columnLayouts, middleColumn)}
          {generatePlayers(secondRowMidfielders, 4, columnLayouts, middleColumn)}
        </>
      );
    }
    return generatePlayers(midfielders, 3, columnLayouts, middleColumn);
  };
  
  export const generateStrikers = (strikers, isMobile, columnLayouts, middleColumn) => {
    if (isMobile && strikers.length > 4) {
      const half = Math.ceil(strikers.length / 2);
      const firstRowStrikers = strikers.slice(0, half);
      const secondRowStrikers = strikers.slice(half);
  
      return (
        <>
          {generatePlayers(firstRowStrikers, 1, columnLayouts, middleColumn)}
          {generatePlayers(secondRowStrikers, 2, columnLayouts, middleColumn)}
        </>
      );
    }
    return generatePlayers(strikers, 2, columnLayouts, middleColumn);
  };