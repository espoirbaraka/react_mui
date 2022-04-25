import React from "react";
import { Box, LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";


function Progress() {
  const [level, setLevel] = useState(0);

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