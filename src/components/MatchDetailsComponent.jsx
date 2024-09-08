import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { parseCSV } from "../utils/csvParser";
import styled from "styled-components";

import MatchContainer from "../ui/MatchContainer";
import TeamsContainer from "../ui/TeamsContainer";
import TeamWrapper from "../ui/TeamWrapper";
import FootballFieldContainer from "../ui/FootballFieldContainer";
import PositionedPlayer from "../ui/PositionedPlayer";

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const MatchTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;

const MatchScore = styled.h3`
  font-size: 2rem;
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;
`;

const TeamName = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ReservesContainer = styled.div`
  margin-top: 20px;
`;

const ReserveTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ReservePlayer = styled.div`
  font-size: 1.2rem;
  padding: 8px 0;
`;

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

  // Define dynamic player positions mapping (example)
  // const positionMapping = {
  //   GK: { row: 4, col: 3 },
  //   DF: { row: 3, col: 1 },
  //   MF: { row: 2, col: 1 },
  //   FW: { row: 1, col: 1 },
  // };

  // Function to render players dynamically based on their position
  const renderPlayers = (players) => {
    let GkArr = [];
    let defArr = [];
    let midArr = [];
    let strArr = [];
    const gridItems = [];

    players.forEach((player) => {
      const position = player.Position;

      if (position === "DF") {
        // def += 1;
        defArr.push(player);
      } else if (position === "MF") {
        // mid += 1;
        midArr.push(player);
      } else if (position === "FW") {
        // strik += 1;
        strArr.push(player);
      } else if (position === "GK") {
        GkArr.push(player);
      }
    });

    const GkArrLength = GkArr.length;
    const defLength = defArr.length;
    const midLength = midArr.length;
    const strLength = strArr.length;


    GkArr.forEach((player, index) => {
      const totalColumns = 7;

      const middleColumn = Math.floor(totalColumns / 2); 

    
      const colOffset =
        GkArr.length > 1
          ? middleColumn - Math.floor(GkArr.length / 2) + index
          : middleColumn;

      gridItems.push(
        <PositionedPlayer
          key={index} 
          className="postion-player"
          row={4}
          col={colOffset}
          positionType={player.Position}
        >
          <div className="player-circle" />
          {player.FullName}
          <span>({player.Position})</span>
        </PositionedPlayer>
      );
    });

    if (defLength === 5) {
      defArr.forEach((player, index)=> {
        const totalColumns = 7;

          const middleColumn = Math.floor(totalColumns / 2); 
    
       
          const colOffset =
            defArr.length > 1
              ? middleColumn - Math.floor(defArr.length / 2) + index
              : middleColumn;
    
          gridItems.push(
            <PositionedPlayer
              className="postion-player"
              row={3}
              key={index} 
              col={colOffset}
              positionType={player.Position}
            >
              <div className="player-circle" />
              {player.FullName}
              <span>({player.Position})</span>
            </PositionedPlayer>
          );
      });
    }

    if (defLength === 4) {
      defArr.forEach((player, index)=> {
        const totalColumns = 10;

          const middleColumn = Math.floor(totalColumns / 2); 
    
       
          const colOffset =
            defArr.length > 1
              ? middleColumn - Math.floor(defArr.length / 2) + index
              : middleColumn;
    
          gridItems.push(
            <PositionedPlayer
              className="postion-player"
              row={3}
              key={index} 
              col={colOffset}
              positionType={player.Position}
            >
              <div className="player-circle" />
              {player.FullName}
              <span>({player.Position})</span>
            </PositionedPlayer>
          );
      });
    }


    // defArr.forEach((player, index) => {
    //   const totalColumns = 7;

    //   const middleColumn = Math.floor(totalColumns / 2); // This is the center

    //   // If there are multiple GKs, position them evenly around the center
    //   const colOffset =
    //     GkArr.length > 1
    //       ? middleColumn - Math.floor(defArr.length / 2) + index
    //       : middleColumn;

    //   gridItems.push(
    //     <PositionedPlayer
    //       className="postion-player"
    //       row={3}
    //       col={colOffset}
    //       positionType={player.Position}
    //     >
    //       <div className="player-circle" />
    //       {player.FullName}
    //       <span>({player.Position})</span>
    //     </PositionedPlayer>
    //   );
    // });



    return gridItems;
  };

  // Render reserve players (those after the 11th player)
  const renderReserves = (players) => {
    return players.slice(11).map((player, index) => (
      <ReservePlayer key={index}>
        {player.FullName} ({player.Position})
      </ReservePlayer>
    ));
  };

  return match && teamA && teamB ? (
    <MatchContainer>
      <Header>
        <MatchTitle>
          {teamA.Name} vs {teamB.Name}
        </MatchTitle>
        <MatchScore>{match.Score}</MatchScore>
      </Header>

      <TeamsContainer>
        {/* Team A Football Field */}
        <TeamWrapper>
          <TeamName>{teamA.Name} Formation:</TeamName>
          <FootballFieldContainer className="foobal-field-container">
            {renderPlayers(playersA.slice(0, 11))}
          </FootballFieldContainer>
          <ReservesContainer>
            <ReserveTitle>Reserves:</ReserveTitle>
            {renderReserves(playersA)}
          </ReservesContainer>
        </TeamWrapper>

        <TeamWrapper>
          <TeamName>{teamB.Name} Formation:</TeamName>
          <FootballFieldContainer>
            {renderPlayers(playersB.slice(0, 11))}
          </FootballFieldContainer>
          <ReservesContainer>
            <ReserveTitle>Reserves:</ReserveTitle>
            {renderReserves(playersB)}
          </ReservesContainer>
        </TeamWrapper>
      </TeamsContainer>
    </MatchContainer>
  ) : (
    <p>Loading match details...</p>
  );
}
