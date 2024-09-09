import { parseCSV } from "../utils/csvParser";

export async function apiMatches() {
  try {
    const response = await fetch("/data/matches.csv");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.text();

    const parsedMatches = parseCSV(data);

    return parsedMatches;
  } catch (error) {
    console.error("Failed to fetch and parse matches data:", error);
  }
}
