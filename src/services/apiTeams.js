import { parseCSV } from "../utils/csvParser";

export async function apiTeams() {
  try {
    const response = await fetch("/data/teams.csv");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.text();

    const parsedTeams = parseCSV(data);
    
    return parsedTeams;
  } catch (error) {
    console.error("Failed to fetch and parse matches data:", error);
  }
}
