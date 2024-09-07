import { useEffect, useState } from 'react';
import { parseCSV } from '../utils/csvParser';

export default function HomeCompoent(){
    const [matches, setMatches] = useState([]);
    console.log(matches);
    

    useEffect(() => {
        fetch('/data/matches.csv')
          .then(res => res.text())
          .then(data => {
            const parsedMatches = parseCSV(data);
            setMatches(parsedMatches);
          });
      }, []);
    
    return(
        <div>HomePage</div>
    );
};