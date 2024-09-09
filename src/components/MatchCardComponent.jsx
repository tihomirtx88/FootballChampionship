/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";
import MatchCard from "../ui/MatchCard";
import TeamContainer from "../ui/TeamContainer";
import MatchTitle from "../ui/Matchtitle";

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


export default function MatchCardComponent({ match, teams, getWinner }) {

  const scorePattern = /(\d+)(?:\((\d+)\))?-(\d+)(?:\((\d+)\))?/;
  const scoreMatch = match.Score.match(scorePattern);

  const teamAScore = parseInt(scoreMatch[1]);
  const teamAPenalty = scoreMatch[2] ? parseInt(scoreMatch[2]) : null;
  const teamBScore = parseInt(scoreMatch[3]);
  const teamBPenalty = scoreMatch[4] ? parseInt(scoreMatch[4]) : null;

  const winner = getWinner({ teamAScore, teamAPenalty, teamBScore, teamBPenalty, match, teams });

  return (
    <MatchCard>
      <Link to={`/match/${match.ID}`} style={{ textDecoration: "none" }}>
        <TeamContainer>
          <TeamLogo
            src={teams[match.ATeamID]?.logo}
            alt={`Logo of ${teams[match.ATeamID]?.name}`}
          />
          <MatchTitle>{`${teams[match.ATeamID]?.name} vs ${teams[match.BTeamID]?.name}`}</MatchTitle>
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
}
