import { useScreenLayout } from "./useScreenLayout";
import { usePlayerGrouping } from "./usePlayerGrouping";
import { generatePlayers, generateDefenders, generateMidfielders, generateStrikers } from "../../utils//useGenerateRowHelpers";

export const useRenderPlayers = (players) => {
  const { isMobile, totalColumns, columnLayouts } = useScreenLayout();
  const playerGroups = usePlayerGrouping(players);
  const middleColumn = Math.ceil(totalColumns / 2);

  const gridItems = [
    // GK
    ...generatePlayers(playerGroups.GK, 7, columnLayouts, middleColumn),
    ...generateDefenders(playerGroups.DF, isMobile, columnLayouts, middleColumn),
    ...generateMidfielders(playerGroups.MF, isMobile, columnLayouts, middleColumn),
    ...generateStrikers(playerGroups.FW, isMobile, columnLayouts, middleColumn),
  ];

  return gridItems;
};
