import React from "react";
import '../App/App.css';
import { Box, CssBaseline, LinearProgress, createMuiTheme, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles'
import SideMenu from "./SideMenu";
import Header from "./Header";
import Feed from '../components/Feed';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '250px',
    width: '100%'
  }
})


function Loader() {
  const classes = useStyles();
  const [level, setLevel] = useState(0);
  const [process, setProcess] = useState(true);

  setTimeout(() => {
    setProcess(false);
  }, [500]);

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
      {
        process ? (
          <LinearProgress
            variant="buffer"
            value={level}
            color="secondary"
            valueBuffer={level + 10}
          />
        ) : (
          <>
            <ThemeProvider theme={theme}>
              <SideMenu />
              <div className={classes.appMain}>
                <Header />
                
                <Feed />
              </div>
              <CssBaseline />
            </ThemeProvider>
          </>
        )
      }
    </Box >

  )
}
export default Loader;