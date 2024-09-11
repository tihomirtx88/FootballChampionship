import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MatchContainer from "../../ui/MatchContainer";
import TeamsContainer from "../../ui/TeamsContainer";
import TeamWrapper from "../../ui/TeamWrapper";

import { useMatches } from "../useMatches";
import { useTeams } from "../useTeams";
import { usePlayers } from "../usePlayers";

import MatchHeader from "./MatchHeader";
import FootballField from "./FootballField";
import Reserves from "./Reserves";

export default function MatchDetailsComponent() {
  const { id } = useParams();

  const [match, setMatch] = useState(null);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

  const [playersA, setPlayersA] = useState([]);
  const [playersB, setPlayersB] = useState([]);

  const { queryMatches } = useMatches();
  const { queryTeams } = useTeams();
  const { queryPlayers } = usePlayers();

  useEffect(() => {
    if (queryMatches.length > 0 && id) {

      const foundMatch = queryMatches.find((m) => m.ID === id);

      if (foundMatch) {
        setMatch(foundMatch);
        loadTeamsAndPlayers(foundMatch);
      }
    }
  }, [queryMatches, id, queryTeams, queryPlayers]);

  const loadTeamsAndPlayers = (match) => {
    if (queryTeams.length > 0 && queryPlayers.length > 0) {
      // Home team
      const teamAData = queryTeams.find((t) => t.ID === match.ATeamID);
      // Quest team
      const teamBData = queryTeams.find((t) => t.ID === match.BTeamID);

      setTeamA(teamAData);
      setTeamB(teamBData);

      const filteredPlayersA = queryPlayers.filter(
        (p) => p.TeamID === match.ATeamID
      );
      const filteredPlayersB = queryPlayers.filter(
        (p) => p.TeamID === match.BTeamID
      );

      setPlayersA(filteredPlayersA);
      setPlayersB(filteredPlayersB);
    }
  };

  return match && teamA && teamB ? (
    <MatchContainer className="match-container">
      <MatchHeader match={match} teamA={teamA} teamB={teamB}></MatchHeader>

      <TeamsContainer className="team-container">
        {/* Team A Football Field */}
        <TeamWrapper className="team-wrapper">
          <FootballField
            teamName={teamA.Name}
            players={playersA}
          ></FootballField>
          <Reserves players={playersA}></Reserves>
        </TeamWrapper>

        <TeamWrapper>
          <FootballField teamName={teamB.Name} players={playersB} />
          <Reserves players={playersB} />
        </TeamWrapper>
      </TeamsContainer>
    </MatchContainer>
  ) : (
    <p>Loading match details...</p>
  );
}
