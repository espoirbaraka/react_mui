import React from 'react';
import '../App/App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import Header from "../components/Header";
import {makeStyles} from '@mui/styles'
import { useState } from "react";
import Progress from '../components/Progress';
import UI_liste_panneau from '../containers/UI_liste_panneau'
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
  }
})

function ListPanneau(){
    const classes = useStyles();
    const [process, setProcess] = useState(true);

    setTimeout(() => {
      setProcess(false);
    }, [500]);
    return (
      < Box >
      {
        process ? (
          <Progress />
        ) : (
          <>
            <ThemeProvider theme={theme}>
              <SideMenu />
              <div className={classes.appMain}>
                <Header />
                
                <UI_liste_panneau />
              </div>
              <CssBaseline />
            </ThemeProvider>
          </>
        )
      }
    </Box >
    )
}
export default ListPanneau