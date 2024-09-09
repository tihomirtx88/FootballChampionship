import { useState } from "react";

import Stage from "../../ui/Stage ";
import HomePagetitle from "../../ui/HomePagetitle";
import TournamentSchema from "../../ui/TournamentSchema ";
import StageTitle from "../../ui/StageTitle ";
import MatchesWrapper from "../../ui/MatchesWrapper";

import { useMatches } from "../useMatches";
import { useTeams } from "../useTeams";
import { filteredMatches, getWinner } from "../../utils/filteredMatches";
import MatchCardComponent from "./MatchCardComponent";
import Filters from "./Filters";

export default function HomeCompoent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("Group Stage");

  const {
    queryMatches,
    error: matchesError,
    isLoading: matchesLoading,
  } = useMatches();
  const { queryTeams, error: teamsError, isLoading: teamsLoading } = useTeams();

  if (matchesLoading || teamsLoading) return <div>Loading...</div>;
  if (matchesError || teamsError)
    return (
      <div>
        Error loading data: {matchesError?.message || teamsError?.message}
      </div>
    );
  if (!queryMatches || !queryTeams) return <div>No data available.</div>;

  const teams = queryTeams.reduce((acc, team) => {
    acc[team.ID] = {
      name: team.Name,
      logo: "https://toppng.com/uploads/preview/flag-of-spain-vector-logo-11574321406zmw8ldqefy.png",
    };
    return acc;
  }, {});

  const groupstate = queryMatches.filter(
    (match) => match.ID >= 1 && match.ID <= 37
  );
  const roundOf16 = queryMatches.filter(
    (match) => match.ID >= 38 && match.ID <= 44
  );
  const quarterFinals = queryMatches.filter(
    (match) => match.ID >= 45 && match.ID <= 48
  );
  const semifinal = queryMatches.filter(
    (match) => match.ID >= 49 && match.ID < 51
  );
  const final = queryMatches.filter((match) => match.ID >= 51);

  const renderFilteredMatches = (stageMatches, stageName) => {
    const stageFilteredMatches = filteredMatches(
      stageMatches,
      stageName,
      stageFilter,
      searchQuery,
      teams
    );

    if (stageFilteredMatches.length === 0) {
      return <p>No matches found for this stage.</p>;
    }

    return stageFilteredMatches.map((match) => {
      return (
        <MatchCardComponent
          key={match.ID}
          match={match}
          teams={teams}
          getWinner={getWinner}
        />
      );
    });
  };

  return (
    <div>
      <HomePagetitle>European Football Championship Brackets</HomePagetitle>

      {/* Filter Section */}
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        stageFilter={stageFilter}
        setStageFilter={setStageFilter}
      ></Filters>

      <TournamentSchema>
        {/* Group Stage */}
        {stageFilter === "Group Stage" ? (
          <Stage>
            <StageTitle>Group Stage</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(groupstate, "Group Stage")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Round of 16 */}
        {stageFilter === "Round of 16" ? (
          <Stage>
            <StageTitle>Round of 16</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(roundOf16, "Round of 16")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Quarterfinals */}
        {stageFilter === "Quarter Finals" ? (
          <Stage>
            <StageTitle>Quarter Finals</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(quarterFinals, "Quarter Finals")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Semifinals */}
        {stageFilter === "Semi Final" ? (
          <Stage>
            <StageTitle>Semi Finals</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(semifinal, "Semi Final")}
            </MatchesWrapper>
          </Stage>
        ) : null}

        {/* Final */}
        {stageFilter === "Final" ? (
          <Stage>
            <StageTitle>Final</StageTitle>
            <MatchesWrapper>
              {renderFilteredMatches(final, "Final")}
            </MatchesWrapper>
          </Stage>
        ) : null}
      </TournamentSchema>
    </div>
  );
}
