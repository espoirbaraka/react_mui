import React from "react";
import { Box, CssBaseline, LinearProgress, createMuiTheme, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles'
import SideMenu from "./SideMenu";
import Header from "./Header";
import Feed from '../components/Feed';


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