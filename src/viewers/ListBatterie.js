import React from 'react';
import '../App/App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline, createMuiTheme, ThemeProvider } from '@mui/material';
import Header from "../components/Header";
import PageHeader from '../components/PageHeader';
import UI_liste_batterie from '../containers/UI_liste_batterie';
import Loader from '../components/Loader';
import {makeStyles, withStyles} from '@mui/styles'
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
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '250px',
    width: '100%'
  }
})

function ListBatterie(){
    const classes = useStyles();
    return (
        
            <Loader />
            
        
    )
}
export default ListBatterie