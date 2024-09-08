import styled from "styled-components";

const PositionedPlayer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 120px;
  height: 50px; */
  max-width: 80px;
  border-radius: 50%;
  background-color: #4caf50;
  color: white;
  text-align: center;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.col};
  margin: 5px;
  position: relative;

   // Circle for player position color
  .player-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 43%;
    top: 70px;
    background-color: ${(props) => {
      if (props.positionType === "GK") return "black";
      if (props.positionType === "DF") return "green";
      if (props.positionType === "MF") return "yellow";
      if (props.positionType === "ST") return "red";
      return "gray"; // Default color
    }};
  }

  /* Styling for player info (name and position) */
  & > span {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

export default PositionedPlayer;
