export const filteredMatches = (matchesToFilter, stageName, stageFilter, searchQuery, teams) => {
    if (stageFilter !== "All" && stageName !== stageFilter) return [];
  
    return matchesToFilter.filter((match) => {
      const teamA = teams[match.ATeamID]?.name?.toLowerCase() || "";
      const teamB = teams[match.BTeamID]?.name?.toLowerCase() || "";
      const searchLower = searchQuery.toLowerCase();
  
      return teamA.includes(searchLower) || teamB.includes(searchLower);
    });
  };
  
  export const getWinner = ({ teamAScore, teamAPenalty, teamBScore, teamBPenalty, match, teams }) => {
    let winner = "";
  
    if (teamAScore > teamBScore) {
      winner = teams[match.ATeamID]?.name + " Wins";
    } else if (teamAScore < teamBScore) {
      winner = teams[match.BTeamID]?.name + " Wins";
    } else {
      if (teamAPenalty !== null && teamBPenalty !== null) {
        if (teamAPenalty > teamBPenalty) {
          winner = teams[match.ATeamID]?.name + " Wins (Penalties)";
        } else if (teamAPenalty < teamBPenalty) {
          winner = teams[match.BTeamID]?.name + " Wins (Penalties)";
        } else {
          winner = "Draw";
        }
      } else {
        winner = "Draw";
      }
    }
  
    return winner;
  };