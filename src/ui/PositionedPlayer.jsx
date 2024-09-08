import styled from "styled-components";

const PositionedPlayer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80px;
  color: white;
  text-align: center;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.col};
  margin: 5px;
  position: relative;

  .player-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 43%;
    top: 70%;
    background-color: ${(props) => {
      if (props.positionType === "GK") return "black";
      if (props.positionType === "DF") return "green";
      if (props.positionType === "MF") return "yellow";
      if (props.positionType === "ST") return "red";
      return "gray"; // Default color
    }};
  }

  & > span {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

export default PositionedPlayer;
