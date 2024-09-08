import styled from "styled-components";

const FootballFieldContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr); /* 4 rows for different positions */
  grid-template-columns: repeat(5, 1fr); /* 7 columns for players */
  gap: 20px; /* Increased gap for better spacing */
  background-color: #4caf50; 
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  height: auto; /* Let height adjust based on the content */
  aspect-ratio: 2 / 3; /* Maintain aspect ratio */
  position: relative;
  border: 3px solid white;
  margin: auto; /* Center the field on the page */
`;

export default FootballFieldContainer;
