import styled from "styled-components";

const Dropdown = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 7px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 0.8rem;
  }

`;

export default Dropdown;