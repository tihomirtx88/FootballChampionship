/* eslint-disable react/prop-types */

import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
`;

const ErrorMessage = styled.h1`
  font-size: 3rem;
  color: #e53935;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

const RetryButton = styled.button`
  background-color: #1976d2;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;

export default function ErrorComponent({ errorType, onRetry }) {
  let message;
  switch (errorType) {
    case "teamError":
      message = "Error loading team details.";
      break;
    case "playerError":
      message = "Error loading player details.";
      break;
    case "matchError":
      message = "Error loading match details.";
      break;
    case "recordsError":
      message = "Error loading player records.";
      break;
    default:
      message = "Error loading data.";
  }

  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
      <Description>
        Oops! Something went wrong while fetching the {errorType.replace('Error', '')}.
      </Description>
      <HomeButton to="/">Back to Home</HomeButton>
      {onRetry && <RetryButton onClick={onRetry}>Try Again</RetryButton>}
    </ErrorContainer>
  );
}
