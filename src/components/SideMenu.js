import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, withStyles } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined, InboxIcon } from '@material-ui/icons';
import { faHome, faCog, faDashboard, faSolarPanel, faBattery, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { AccessAlarmsSharp } from '@material-ui/icons'


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
    }
}

const SideMenu = (props) => {
    const { classes } = props;

    const menuItems = [
        {
            text: 'Mu first note',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Mu second note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/home'
        }
    ]
    return (
        <div className={classes.sideMenu}>

            <Toolbar />
            
            <List>
                <NavLink exact to="/" className={classes.navlink}>
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
                <ListItemText className={classes.textNav} primary="Paramètres" />
            </ListItem>
        </NavLink>
            </List>

        </div>
    )
}

export default withStyles(style)(SideMenu);
