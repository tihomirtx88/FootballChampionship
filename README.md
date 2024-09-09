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
  
- **TeamDetailsComponent**: This component show detailed view of a team's roster, including player cards grouped by position.

### Utilities

- **csvParser**: Inlcude utility function to parse CSV files for match and team data with custom js.

### UI Components

- **Styled Components**: The app use custom styled components used to create view layouts such as `MatchCard`, `TeamContainer`, `FilterContainer` and many moors.

## Algorithm Summary

### HomeComponent

1. **Fetching Data**:
   - Data is fetched from two CSV files (`matches.csv` and `teams.csv`) and parsed using the `parseCSV` utility.
     - `matches.csv`: Hold information about all the matches.
     - `teams.csv`: Hold team details.

