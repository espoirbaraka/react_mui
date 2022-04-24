import React from "react";
import { Box, LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";


function Progress() {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
    }, 700);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    < Box >
          <LinearProgress
            value={level}
            color="secondary"
            valueBuffer={level + 10}
          />
    </Box >

  )
}
export default Progress;