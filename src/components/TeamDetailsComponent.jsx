import { useParams } from "react-router";
import { useRecords } from "./useRecords";
import styled from "styled-components";
import { useTeams } from "./useTeams";
import { usePlayers } from "./usePlayers";
import { useMatches } from "./useMatches";

const TeamDetailsContainer = styled.div`
  padding: 20px;
`;

const RosterContainer = styled.div`
  margin-top: 40px;
`;

const PlayerCard = styled.div`
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  position: relative;
`;

const PositionGroup = styled.div`
  margin-bottom: 40px;
`;

const PositionTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 20px;
`;

const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const PlayerName = styled.h4`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const PlayerPosition = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #4caf50;
`;

const PlayerNumber = styled.span`
  position: absolute;
  bottom: -8px;
  right: -8px;
  background-color: #4caf50;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 50%;
`;

const PlayerRecordsList = styled.div`
  margin-top: 10px;
`;

const PlayerRecord = styled.div`
  font-size: 0.9rem;
  color: #00796b;
`;

export default function TeamDetailsComponent() {
  const { id } = useParams();

  const { queryTeams, error: teamError, isLoading: teamLoading } = useTeams();
  const {
    queryPlayers,
    error: playerError,
    isLoading: playerLoading,
  } = usePlayers();
  const {
    queryMatches,
    error: matchError,
    isLoading: matchLoading,
  } = useMatches();
  const {
    queryRecords,
    error: recordsError,
    isLoading: recordsLoading,
  } = useRecords();

  if (teamLoading || playerLoading || matchLoading || recordsLoading)
    return <p>Loading team details...</p>;
  if (teamError || playerError || matchError || recordsError)
    return <p>Error loading data.</p>;

  const team = queryTeams.find((t) => t.ID === id);

  if (!team) return <p>Team not found.</p>;

  const players = {
    goalkeepers: queryPlayers.filter(
      (p) => p.TeamID === id && p.Position === "GK"
    ),
    defenders: queryPlayers.filter(
      (p) => p.TeamID === id && p.Position === "DF"
    ),
    midfielders: queryPlayers.filter(
      (p) => p.TeamID === id && p.Position === "MF"
    ),
    forwards: queryPlayers.filter(
      (p) => p.TeamID === id && p.Position === "FW"
    ),
  };

  // Map records
  const playerRecords = queryRecords.reduce((acc, record) => {
    const { PlayerID, fromMinutes, toMinutes, MatchID } = record;
    if (!acc[PlayerID]) {
      acc[PlayerID] = [];
    }

    acc[PlayerID].push({ fromMinutes, toMinutes, MatchID });
    return acc;
  }, []);

  // Map matches
// Map matches
const matchMap = queryMatches.reduce((acc, match) => {
  acc[match.ID] = {
    date: match?.Date,
    score: match?.Score,
    opponent: match.ATeamID === id ? `Team ${match.BTeamID}` : `Team ${match.ATeamID}`,
  };
  return acc;
}, {});

  // Render player records
  const renderPlayerRecords = (playerID) => {
    const records = playerRecords[playerID] || [];
    return (
      <PlayerRecordsList>
        {records.map((record, index) => {
          const match = matchMap[record.MatchID];
          if (!match) {
            return <PlayerRecord key={index}>Match data not available</PlayerRecord>;
          }
          return (
            <PlayerRecord key={index}>
              {`Match Date: ${match.date || "N/A"} | Opponent: ${match.opponent || "N/A"} | Played from ${record.fromMinutes || 0} to ${record.toMinutes || "end"}`}
            </PlayerRecord>
          );
        })}
      </PlayerRecordsList>
    );
  };

  return team ? (
    <TeamDetailsContainer>
      <h2>{team.Name}</h2>
      <h3>Manager: {team.ManagerFullName}</h3>
      <RosterContainer>
        {Object.keys(players).map((position) => (
          <PositionGroup key={position}>
            <PositionTitle>
              {position.charAt(0).toUpperCase() + position.slice(1)}
            </PositionTitle>
            <PlayerGrid>
              {players[position].map((player) => (
                <PlayerCard key={player.ID}>
                  <PlayerName>{player.FullName}</PlayerName>
                  <PlayerPosition>{player.Position}</PlayerPosition>
                  <PlayerNumber>{player.TeamNumber}</PlayerNumber>
                  {renderPlayerRecords(player.ID)}
                </PlayerCard>
              ))}
            </PlayerGrid>
          </PositionGroup>
        ))}
      </RosterContainer>
    </TeamDetailsContainer>
  ) : (
    <p>Loading team details...</p>
  );
}
