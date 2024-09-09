import { useEffect, useState } from "react";
import { parseCSV } from "../utils/csvParser";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Stage from "../ui/Stage ";
import HomePagetitle from "../ui/HomePagetitle";
import TournamentSchema from "../ui/TournamentSchema ";
import StageTitle from "../ui/StageTitle ";
import MatchesWrapper from "../ui/MatchesWrapper";

const MatchCard = styled.div`
  background-color: #ffffff;
  width: 300px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const MatchTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

const MatchInfo = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Score = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #4caf50;
`;

const TeamLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 10px;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Dropdown = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export default function HomeCompoent() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("Group Stage");

  useEffect(() => {
    fetch("/data/matches.csv")
      .then((res) => res.text())
      .then((data) => {
        const parsedMatches = parseCSV(data);
        setMatches(parsedMatches);
      });

    fetch("/data/teams.csv")
      .then((res) => res.text())
      .then((data) => {
        const parsedTeams = parseCSV(data);
        const tempMap = {};
        parsedTeams.forEach((team) => {
          tempMap[team.ID] = {
            name: team.Name,
            logo: "https://toppng.com/uploads/preview/flag-of-spain-vector-logo-11574321406zmw8ldqefy.png",
          };
        });

        setTeams(tempMap);
      });
  }, []);

  // Divide matches by stages
  const groupstate = matches.filter((match) => match.ID >= 1 && match.ID <= 37);
  const roundOf16 = matches.filter((match) => match.ID >= 38 && match.ID <= 44);
  const quarterFinals = matches.filter(
    (match) => match.ID >= 45 && match.ID <= 48
  );
  const semifinal = matches.filter((match) => match.ID >= 49 && match.ID < 51);

  const final = matches.filter((match) => match.ID >= 51);

  // Filter matches based on search and stage filter
  const filteredMatches = (matchesToFilter, stageName) => {
    // Filter based on stage name
    if (stageFilter !== "All" && stageName !== stageFilter) return [];

    return matchesToFilter.filter((match) => {
      const teamA = teams[match.ATeamID]?.name?.toLowerCase() || "";
      const teamB = teams[match.BTeamID]?.name?.toLowerCase() || "";
      const searchLower = searchQuery.toLowerCase();

      const isSearchMatch =
        teamA.includes(searchLower) || teamB.includes(searchLower);

      return isSearchMatch;
    });
  };

  const renderFilteredMatches = (stageMatches, stageName) => {
    const stageFilteredMatches = filteredMatches(stageMatches, stageName);

    if (stageFilteredMatches.length === 0) {
      return <p>No matches found for this stage.</p>;
    }

    return stageFilteredMatches.map((match) => {
      const scorePattern = /(\d+)(?:\((\d+)\))?-(\d+)(?:\((\d+)\))?/;
      const scoreMatch = match.Score.match(scorePattern);

      let teamAScore = parseInt(scoreMatch[1]);
      let teamAPenalty = scoreMatch[2] ? parseInt(scoreMatch[2]) : null;
      let teamBScore = parseInt(scoreMatch[3]);
      let teamBPenalty = scoreMatch[4] ? parseInt(scoreMatch[4]) : null;

      let winner = "";

      // Determine winner
      if (teamAScore > teamBScore) {
        winner = teams[match.ATeamID]?.name + " Wins";
      } else if (teamAScore < teamBScore) {
        winner = teams[match.BTeamID]?.name + " Wins";
      } else {
        // If it's a draw, check penalties if available
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

      return (
        <MatchCard key={match.ID}>
          <Link to={`/match/${match.ID}`} style={{ textDecoration: "none" }}>
            <TeamContainer>
              <TeamLogo
                src={teams[match.ATeamID]?.logo}
                alt={`Logo of ${teams[match.ATeamID]?.name}`}
              />
              <MatchTitle>{`${teams[match.ATeamID]?.name} vs ${
                teams[match.BTeamID]?.name
              }`}</MatchTitle>
              <TeamLogo
                src={teams[match.BTeamID]?.logo}
                alt={`Logo of ${teams[match.BTeamID]?.name}`}
              />
            </TeamContainer>
            <Score>{`${match.Score}`}</Score>
            <MatchInfo>{`${match.Date}`}</MatchInfo>
            <MatchInfo>{winner}</MatchInfo>
          </Link>
        </MatchCard>
      );
    });
  };

  return (
    <div>
      <HomePagetitle>European Football Championship Brackets</HomePagetitle>

      {/* Filter Section */}

      <FilterContainer>
        <Input
          type="text"
          placeholder="Search by team"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Dropdown
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="Group Stage">Group Stage</option>
          <option value="Round of 16">Round of 16</option>
          <option value="Quarter Finals">Quarter Finals</option>
          <option value="Semi Final">Semi Final</option>
          <option value="Final">Final</option>
        </Dropdown>
      </FilterContainer>

      <TournamentSchema>
        {/* Group Stage */}
        {stageFilter === "Group Stage" ? (
          <Stage>
            <StageTitle>Group Stage</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(groupstate, "Group Stage")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Round of 16 */}
        {stageFilter === "Round of 16" ? (
          <Stage>
            <StageTitle>Round of 16</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(roundOf16, "Round of 16")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Quarterfinals */}
        {stageFilter === "Quarter Finals" ? (
          <Stage>
            <StageTitle>Quarter Finals</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(quarterFinals, "Quarter Finals")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Semifinals */}
        {stageFilter === "Semi Final" ? (
          <Stage>
            <StageTitle>Semi Finals</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(semifinal, "Semi Final")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Final */}
        {stageFilter === "Final" ? (
          <Stage>
            <StageTitle>Final</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(final, "Final")}
            </MatchesWrapper>
          </Stage>
        ) : null}
      </TournamentSchema>
    </div>
  );
}
