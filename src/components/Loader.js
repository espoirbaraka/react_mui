import React from "react";
import { Box, LinearProgress, makeStyles, createStyles } from "@mui/material";
import { useState, useEffect } from "react";

function Loader() {
  const [level, setLevel] = useState(0);


  setTimeout(() => {
    setLevel(false);
  }, [3000]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
    }, 700);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box>
      <LinearProgress
        variant="buffer"
        value={level}
        color="secondary"
        valueBuffer={level + 10}
      />
    </Box>
  )
}
export default Loader;