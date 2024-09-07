import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { parseCSV } from "../utils/csvParser";

export default function TeamDetailsComponent(){

    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
       fetch("/data/teams.csv")
          .then(res => res.text())
          .then(data => {
            const teams = parseCSV(data);
            const foundTeam = teams.find(t => t.ID === id);

            setTeam(foundTeam);
            loadPlayers(foundTeam.ID);
          });
    },[id]);

    const loadPlayers = (teamId) => {
        fetch("/data/players.csv")
           .then(res => res.text())
           .then(data => {
              const players = parseCSV(data);

              setPlayers(players.filter(p => p.TeamID === teamId));
           });
    };

    return team ? (
        <div>
          <h2>{team.Name}</h2>
          <h3>Manager: {team.ManagerFullName}</h3>
          <ul>
            {players.map(player => (
              <li key={player.ID}>
                {player.FullName} - {player.Position}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading team details...</p>
      );
};