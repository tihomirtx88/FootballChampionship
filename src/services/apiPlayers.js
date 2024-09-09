import { parseCSV } from "../utils/csvParser";

export async function apiPlayers() {
  try {
    const response = await fetch("/data/players.csv");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.text();

    const parsedPlayers = parseCSV(data);
    
    return parsedPlayers;
  } catch (error) {
    console.error("Failed to fetch and parse matches data:", error);
  }
}