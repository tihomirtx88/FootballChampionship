import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #333;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 40px;
`;

const HomeButton = styled(Link)`
  background-color: #4caf50;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

export default function PageNotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! The page you are looking for doesnt exist.</Message>
      <HomeButton to="/">Back to Home</HomeButton>
    </NotFoundContainer>
  );
}
