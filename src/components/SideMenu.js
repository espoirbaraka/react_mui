import React from 'react'
import { Divider, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { faCog, faDashboard, faSolarPanel, faBattery, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import {withStyles} from '@mui/styles'

// withStyles & makeStyles
const drawerWidth = 250

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '250px',
        height: '100%',
        backgroundColor: '#253053'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        background: '#253053'
    },
    textNav: {
        color: '#bbb',
        paddingLeft: 15

    },
    line: {
        background: '#777'
    },
    icon: {
        color: '#fff'
    },
    navlink: {
        textDecoration: 'none'
    },
    active: {
        background: '#f4f4f4'
    },
}

const SideMenu = (props) => {
    const { classes } = props;
    const location = useLocation();

    return (
        <div className={classes.sideMenu}>

            <Toolbar />
            
            <List>
                <NavLink exact to="/home" className={location.pathname == '/home' ? classes.active : null}>
                    <ListItem button key="Dashboard">
                        <FontAwesomeIcon className={classes.icon} icon={faDashboard}></FontAwesomeIcon>
                        <ListItemText className={classes.textNav} primary="Dashboard" />
                    </ListItem>
                </NavLink>
            </List>
            <Divider className={classes.line} />
            <List>
                <NavLink exact to="/batterie" className={classes.navlink}>
                    <ListItem button key="Batterie">
                        <FontAwesomeIcon className={classes.icon} icon={faBattery}></FontAwesomeIcon>
                        <ListItemText className={classes.textNav} primary="Batterie" />
                    </ListItem>
                </NavLink>

                <NavLink exact to="/panneau" className={classes.navlink}>
                    <ListItem button key="Panneau">
                        <FontAwesomeIcon className={classes.icon} icon={faSolarPanel}></FontAwesomeIcon>
                        <ListItemText className={classes.textNav} primary="Panneau solaire" />
                    </ListItem>
                </NavLink>

                <NavLink exact to="/other" className={classes.navlink}>
                    <ListItem button key="Autres">
                        <FontAwesomeIcon className={classes.icon} icon={faList}></FontAwesomeIcon>
                        <ListItemText className={classes.textNav} primary="Autres equipements" />
                    </ListItem>
                </NavLink>
            </List>
            <Divider className={classes.line} />
            <List>
            <NavLink exact to="/parametre" className={classes.navlink}>
            <ListItem button key="Autres">
                <FontAwesomeIcon className={classes.icon} icon={faCog}></FontAwesomeIcon>
                <ListItemText className={classes.textNav} primary="Param??tres" />
            </ListItem>
        </NavLink>
            </List>

        </div>
    )
}

export default withStyles(style)(SideMenu);
