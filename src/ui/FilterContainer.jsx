import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export default FilterContainer;