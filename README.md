# European Football Championship Brackets Project

## Overview

This project is a web application that visualizes the European Football Championship match results, team rosters, and stage filters. Part of functionality is:

- Search for specific matches and teams.
- Filter matches by stage.
- View detailed team rosters, including player information grouped by position.

The application is built using **React** for the frontend, **Styled Components** for styling, and **React Router** for navigation between different views.

## Features

- **Home Page**: Displays a list of matches for the European Football Championship, with the option to filter matches by stage - Group Stage, Round of 16, Quarterfinals, Semifinals or Final.
  
- **Search Functionality**: Users can search for matches by team name with dynamically filtering the displayed results.

- **Team Details Page**: Clicking on a match navigate the user to a details page for the example teams, showing the team roster, groping by position =Goalkeepers, Defenders, Midfielders or Forwards. 

- **Dynamic Filtering**: User can filtering matches by stage = Group Stage, Semifinals and final and by team name.

- **Responsive Match Cards**: Each match is wrapping by a card with one displaying:
  - Teams.
  - Score, including penalties if have.
  - Match date.
  - Winner or draw result.

## File Structure

### Components

- **HomeComponent**: This compoennt displaying match cards with search and stage filter functionalities.

- **MatchDetailsComponent**: This compoennt displaying match formations on bouth of teams with teams reserves players.
  
- **TeamDetailsComponent**: This component show detailed view of a team's roster, including player cards grouped by position.

### Utilities

- **csvParser**: Inlcude utility function to parse CSV files for match and team data with custom js.
- **filteredMatches**: Inlcude utility function to fillter games and recive few parametars - matchesToFilter, stageName, stageFilter, searchQuery, teams.
- **getWinner**: Inlcude utility function to check who of the bouth teams are winner and return the winner.

### UI Components

- **Styled Components**: The app use custom styled components used to create view layouts such as `MatchCard`, `TeamContainer`, `FilterContainer` and many moors.

## Algorithm Summary

### HomeComponent

1. **Fetching Data**:
   - Data is fetched from two CSV files (`matches.csv`, `teams.csv`, `players.csv`, `records.csv`) and parsed using the `parseCSV` utility.
     - `matches.csv`: Hold information about all the matches.
     - `teams.csv`: Hold team details.
     - `players.csv`: Hold information about all the players.
     - `records.csv`: Hold information about playing time on players in custom game.
2. **Filtering Matches**:
   - Matches are filtered based on the search query and the selected stage filter.
   - Search filtering compares team names from the user input, while stage filtering compares the match stage (Group Stage, Round of 16...) to the selected stage.

4. **Match Card Rendering**:
   - Each match is displayed using a `MatchCard` with one contains:
     - Competing teams' names and logos.
     - The final score, including penalties if have.
     - The date of the match and the winner or draw outcome.
     - The card includes a link to a detailed view of the match.


### TeamDetailsComponent

1. **Fetching Data**:
   - Team details are fetched from `teams.csv` using the team ID extracted from the URL parameters.
   - Player details are fetched from `players.csv` and grouping by position (Goalkeepers, Defenders, Midfielders, Forwards).
   - Matches details are fetched from `matches.csv` and display match date for each player where hi is already played.
   - Records details are fetched from `records.csv` and map all revords for each player and render in PlayerRecordsList component.

2. **Rendering Player Cards**:
   - Each player is displayed using a `PlayerCard` showing:
   - Player's name, position, and team number.
   - Players are grouped by their respective positions example : (Goalkeepers, Defenders...).

### MatchDetailsComponent

1. **Fetching Data**
   - Data for the specific match is fetched from `matches.csv`, while team details are fetched from `teams.csv` and player details from `players.csv`. 
     This component uses the match ID from the URL to find the relevant match and load the team and player information.
   - Players are separate into two teams: Team A and Team B, based on the match details. Reserves are also fetched and displayed under the main squad.

2. **Rendering Teams**
   - The component renders both teams in a football field layout using a custom FootballField component.
   - Each teams formation is displayed, with players positioned depends on their roles
   - Player reserves are displayed below the main formations using the Reserves component.

3. **Dynamic Data Display**

   - The component displays match-specific data like team names, players, and reserves, with the layout visually styled to match a real football formation.

4. **Match Header**

   - At the top, the component renders a MatchHeader that shows key match details, like the competing teams, match date, and score.

5. **Overview**
 
   - This component display a detailed match view where users can analyze the players and team formations for both competing teams.