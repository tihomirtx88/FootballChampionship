import styled from "styled-components";

const PositionedPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px; /* Ensure width is controlled */
  color: white;
  text-align: center;
  grid-row: ${(props) => props.row}; /* Dynamic row based on position */
  grid-column: ${(props) => props.col}; /* Dynamic column */
  position: relative;
  padding: 5px;
  margin: auto;

  /* Player Circle */
  .player-circle {
    width: 40px; /* Increase the size of player circles */
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => {
      if (props.positionType === "GK") return "black";
      if (props.positionType === "DF") return "green";
      if (props.positionType === "MF") return "yellow";
      if (props.positionType === "FW") return "red";
      return "gray"; // Default color
    }};
    margin-bottom: 10px;
  }

  & > span {
    font-size: 1rem; /* Adjust font size for better readability */
    margin-top: 10px;
  }
`;

export default PositionedPlayer;
