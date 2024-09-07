import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { parseCSV } from "../utils/csvParser";

export default function MatchDetailsComponent() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);
  const [playersA, setPlayersA] = useState([]);
  const [playersB, setPlayersB] = useState([]);

  useEffect(() => {
    fetch("/data/matches.csv")
      .then((res) => res.text())
      .then((data) => {

        const matches = parseCSV(data);
        const foundMatch = matches.find((m) => m.ID === id);

        setMatch(foundMatch);
        
        loadTeams(foundMatch);
      });
  }, [id]);

  const loadTeams = (match) => {
    fetch("/data/teams.csv")
      .then((res) => res.text())
      .then((data) => {

        const teams = parseCSV(data);
        const teamAData = teams.find((t) => t.ID === match.ATeamID);
        const teamBData = teams.find((t) => t.ID === match.BTeamID);

        setTeamA(teamAData);
        setTeamB(teamBData);

        loadPlayers(match.ATeamID, match.BTeamID);
      });
  };

  const loadPlayers = (teamAId, teamBId) => {
    fetch("/data/players.csv")
      .then((res) => res.text())
      .then((data) => {
        const players = parseCSV(data);
        setPlayersA(players.filter((p) => p.TeamID === teamAId));
        setPlayersB(players.filter((p) => p.TeamID === teamBId));
      });
  };

  return match && teamA && teamB ? (
    <div>
      <h2>
        Match Details: {teamA.Name} vs {teamB.Name}
      </h2>
      <h3>Score: {match.Score}</h3>
      <div className="teams">
        <div>
          <h4>{teamA.Name}</h4>
          <ul>
            {playersA.map((player) => (
              <li key={player.ID}>
                {player.FullName} - {player.Position}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{teamB.Name}</h4>
          <ul>
            {playersB.map((player) => (
              <li key={player.ID}>
                {player.FullName} - {player.Position}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading match details...</p>
  );
}
