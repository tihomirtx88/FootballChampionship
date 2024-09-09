/* eslint-disable react/prop-types */
import styled from "styled-components";

import FilterContainer from "../../ui/FilterContainer";
import Dropdown from "../../ui/Dropdown";

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export default function Filters({searchQuery, setSearchQuery, stageFilter, setStageFilter }){
    return (
        <FilterContainer>
          <Input
            type="text"
            placeholder="Search by team"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Dropdown
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
          >
            <option value="Group Stage">Group Stage</option>
            <option value="Round of 16">Round of 16</option>
            <option value="Quarter Finals">Quarter Finals</option>
            <option value="Semi Final">Semi Final</option>
            <option value="Final">Final</option>
          </Dropdown>
        </FilterContainer>
      );
};