import { useEffect, useState } from "react";
import { parseCSV } from "../utils/csvParser";
import { Link } from "react-router-dom";

export default function HomeCompoent() {
  const [matches, setMatches] = useState([]);
  console.log(matches);

  useEffect(() => {
    fetch("/data/matches.csv")
      .then((res) => res.text())
      .then((data) => {
        const parsedMatches = parseCSV(data);
        setMatches(parsedMatches);
      });
  }, []);

  return (
    <div>
      <h1>European Football Championship Brackets</h1>
      <div className="brackets">
        {matches.map((match) => (
          <div key={match.ID} className="match">
            <Link to={`/match/${match.ID}`}>
              <p>{`Match: ${match.ATeamID} vs ${match.BTeamID}`}</p>
              <p>{`Score: ${match.Score}`}</p>
              <p>{`Date: ${match.Date}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
