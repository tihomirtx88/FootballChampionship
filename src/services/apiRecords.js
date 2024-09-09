import { parseCSV } from "../utils/csvParser";

export async function apiRecords() {
  try {
    const response = await fetch("/data/records.csv");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.text();

    const parsedRecords = parseCSV(data);
    
    return parsedRecords;
  } catch (error) {
    console.error("Failed to fetch and parse matches data:", error);
  }
}