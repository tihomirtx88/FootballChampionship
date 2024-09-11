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
  margin-bottom: 10px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff; 
  font-weight: 700;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: #0056b3; 
    text-shadow: 0 0 5px rgba(0, 91, 187, 0.6); 
  }

  &:focus {
    outline: none;
    text-decoration: underline; 
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; 
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

export default function MatchHeader({ match, teamA, teamB }) {
  return (
    <Header>
      <MatchTitle>
        <StyledLink to={`/team/${teamA.ID}`}>{teamA.Name}</StyledLink> VS{" "}
        <StyledLink to={`/team/${teamB.ID}`}>{teamB.Name}</StyledLink>
      </MatchTitle>
      <MatchScore>{match.Score}</MatchScore>
    </Header>
  );
}
