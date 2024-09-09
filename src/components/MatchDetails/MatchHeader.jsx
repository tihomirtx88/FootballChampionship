/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function MatchHeader({ match, teamA, teamB }){
    return (
        <Header>
          <MatchTitle>
            <Link to={`/team/${teamA.ID}`}>{teamA.Name}</Link> VS{" "}
            <Link to={`/team/${teamB.ID}`}>{teamB.Name}</Link>
          </MatchTitle>
          <MatchScore>{match.Score}</MatchScore>
        </Header>
      );
};