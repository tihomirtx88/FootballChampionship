import styled from "styled-components";

const ReservePlayer = styled.div`
  font-size: 1.2rem;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:last-child {
    border-bottom: none; /* Remove border for the last player */
  }

  &:hover {
    background-color: #e9ecef;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 8px 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px 0;
  }
`;

export default ReservePlayer;