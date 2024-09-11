import { useEffect, useState } from "react";

export const useScreenLayout = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    const [totalColumns, setTotalColumns] = useState(9);
    const [columnLayouts, setColumnLayouts] = useState({
      1: [5],
      2: [4, 6],
      3: [3, 5, 7],
      4: [2, 4, 6, 8],
      5: [2, 3, 5, 7, 8],
      6: [2, 3, 4, 6, 7, 8],
      7: [1, 3, 4, 5, 6, 7, 8],
    });

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth <= 480) {
            setIsMobile(true);
            setTotalColumns(7);
            setColumnLayouts({
              1: [5],
              2: [4, 6],
              3: [3, 5, 7],
              4: [2, 4, 6, 8],
              5: [1, 3, 4, 5, 7],
              6: [1, 2, 3, 5, 6, 7],
              7: [1, 2, 3, 4, 5, 6, 7],
            });
          } else {
            setIsMobile(false);
            setTotalColumns(9);
            setColumnLayouts({
              1: [5],
              2: [4, 6],
              3: [3, 5, 7],
              4: [2, 4, 6, 8],
              5: [2, 3, 5, 7, 8],
              6: [2, 3, 4, 6, 7, 8],
              7: [1, 3, 4, 5, 6, 7, 8],
            });
          }
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      return { isMobile, totalColumns, columnLayouts };
};