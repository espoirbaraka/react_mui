import React from 'react';
import '../App/App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import Header from "../components/Header";
import { makeStyles } from '@mui/styles'
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
})

function Home() {
    const classes = useStyles();
    
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

                              
                            </div>
                            <CssBaseline />
                        </ThemeProvider>
                    </>
                )
            }
        </Box >
    )
}
export default Home