import React from 'react';
import '../App/App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import Header from "../components/Header";import UI_liste_batterie from '../containers/UI_liste_batterie';
import {makeStyles} from '@mui/styles'
import { useState } from "react";
import Progress from '../components/Progress';
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
  },
  // progress: {
  //   top: '0',
  //   width: '100%'
  // }
})

function ListBatterie(){
    const classes = useStyles();
    const [process, setProcess] = useState(true);

    setTimeout(() => {
      setProcess(false);
    }, [500]);
    return (
      < Box >
      {
        process ? (
          <></>
        ) : (
          <>
            <ThemeProvider theme={theme}>
              <SideMenu />
              <div className={classes.appMain}>
                <Header />
                
                <UI_liste_batterie />
              </div>
              <CssBaseline />
            </ThemeProvider>
          </>
        )
      }
    </Box >
    )
}
export default ListBatterie