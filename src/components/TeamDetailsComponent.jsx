import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { parseCSV } from "../utils/csvParser";
import styled from "styled-components";

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

export default function TeamDetailsComponent() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState({
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    forwards: [],
  });

  useEffect(() => {
    fetch("/data/teams.csv")
      .then((res) => res.text())
      .then((data) => {
        const teams = parseCSV(data);
        const foundTeam = teams.find((t) => t.ID === id);

        setTeam(foundTeam);
        loadPlayers(foundTeam.ID);
      });
  }, [id]);

  const loadPlayers = (teamId) => {
    fetch("/data/players.csv")
      .then((res) => res.text())
      .then((data) => {
        const players = parseCSV(data);

        const groupedPlayers = {
          goalkeepers: players.filter((p) => p.TeamID === teamId && p.Position === "GK"),
          defenders: players.filter((p) => p.TeamID === teamId && p.Position === "DF"),
          midfielders: players.filter((p) => p.TeamID === teamId && p.Position === "MF"),
          forwards: players.filter((p) => p.TeamID === teamId && p.Position === "FW"),
        };

        setPlayers(groupedPlayers);
      });
  };

  return team ? (
    <TeamDetailsContainer>
      <h2>{team.Name}</h2>
      <h3>Manager: {team.ManagerFullName}</h3>
      <RosterContainer>

        <PositionGroup>
          <PositionTitle>Goalkeepers</PositionTitle>
          <PlayerGrid>
             {players.goalkeepers.map((player) => (
                <PlayerCard key={player.ID}>
                  <PlayerName>{player.FullName}</PlayerName>
                  <PlayerPosition>{player.Position}</PlayerPosition>
                  <PlayerNumber>{player.TeamNumber}</PlayerNumber>
                </PlayerCard>
             ))}
          </PlayerGrid>
        </PositionGroup>

        <PositionGroup>
          <PositionTitle>Defenders</PositionTitle>
          <PlayerGrid>
             {players.defenders.map((player) => (
                <PlayerCard key={player.ID}>
                  <PlayerName>{player.FullName}</PlayerName>
                  <PlayerPosition>{player.Position}</PlayerPosition>
                  <PlayerNumber>{player.TeamNumber}</PlayerNumber>
                </PlayerCard>
             ))}
          </PlayerGrid>
        </PositionGroup>

        <PositionGroup>
          <PositionTitle>Midfielders</PositionTitle>
          <PlayerGrid>
             {players.midfielders.map((player) => (
                <PlayerCard key={player.ID}>
                  <PlayerName>{player.FullName}</PlayerName>
                  <PlayerPosition>{player.Position}</PlayerPosition>
                  <PlayerNumber>{player.TeamNumber}</PlayerNumber>
                </PlayerCard>
             ))}
          </PlayerGrid>
        </PositionGroup>

        <PositionGroup>
          <PositionTitle>Forwards</PositionTitle>
          <PlayerGrid>
             {players.forwards.map((player) => (
                <PlayerCard key={player.ID}>
                  <PlayerName>{player.FullName}</PlayerName>
                  <PlayerPosition>{player.Position}</PlayerPosition>
                  <PlayerNumber>{player.TeamNumber}</PlayerNumber>
                </PlayerCard>
             ))}
          </PlayerGrid>
        </PositionGroup>
       
      </RosterContainer>
    </TeamDetailsContainer>
  ) : (
    <p>Loading team details...</p>
  );
}
