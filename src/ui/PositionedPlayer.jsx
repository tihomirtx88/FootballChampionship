import styled from "styled-components";

const PositionedPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px; 
  color: white;
  text-align: center;
  grid-row: ${(props) => props.row}; 
  grid-column: ${(props) => props.col}; 
  position: relative;
  padding: 5px;
  margin: auto;

 
  .player-circle {
    width: 20px; 
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => {
      if (props.positionType === "GK") return "black";
      if (props.positionType === "DF") return "green";
      if (props.positionType === "MF") return "yellow";
      if (props.positionType === "FW") return "red";
      return "gray"; 
    }};
    margin-bottom: 10px;
  }

  & > span {
    font-size: 1rem; 
    margin-top: 10px;
  }
`;

export default PositionedPlayer;
