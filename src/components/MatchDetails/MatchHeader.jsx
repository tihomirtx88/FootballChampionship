/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;  
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;  
  }
`;

const MatchTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem; 
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; 
  }
`;

const MatchScore = styled.h3`
  font-size: 2rem;
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.6rem;  
    margin-top: 8px; 
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;  
    margin-top: 6px;  
  }
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