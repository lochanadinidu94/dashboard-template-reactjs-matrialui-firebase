import React, { useState, useEffect, useContext } from 'react'

//internal
import { useStyle } from '../Styles';
import { ItemsMenu } from './ItemsMenu';
import { routes } from '../routes';

//@matrial-ui
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';


//assets
import Logo from '../logo.svg'
import { AppBar, CssBaseline, Divider, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { ChevronLeft , ChevronRight, Menu } from '@material-ui/icons';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import {
    useMediaQuery,
    useTheme,
  } from "@material-ui/core";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Navigation = () => {

    const classes = useStyle();
    const theme = useTheme();

    const [open, setOpen] = useState(true);
    

    const location = useLocation();
    const [componantName, setComponantName] = useState('');


    const matches = useMediaQuery(theme.breakpoints.down("xs"));


      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

      useEffect(() => {

        if(location.pathname === '/Dashboard' ||location.pathname === '/'){
            setComponantName('Dashboard')
        } else if(location.pathname === '/accounts'){
            setComponantName('Accounts')
        } else if (location.pathname === '/transactions'){
            setComponantName('Transactions')
        } else if (location.pathname === '/secure'){
            setComponantName('Secure')
        } else if (location.pathname === '/settings'){
            setComponantName('Settings')
        } 
      },[location])

      

    return (

        <div className={classes.root}>
            {/* App Bar */}

            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
                style ={{backgroundColor:"transparent", color:"#757575",boxShadow:"0px 0px 0px 0px"}}
            >
                <Toolbar>
                    <IconButton
                        color="#757575"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                    <Menu />
                    </IconButton>

                    <Typography variant='h6'>{componantName}</Typography>
                </Toolbar>
            </AppBar>

            {/* End App Bar */}
            {/* Drawer */}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}

                style= {{backgroundColor:"#fafafa"}}

            >   
                <div className={classes.drawerHeader}>
                <IconButton color="#3DAC4B" onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                </IconButton>
                </div>

                 {/* Navigation List */}

                    <div className={classes.navigationLogoContainer}>
                        <img className={classes.navigationLogo} src={Logo} alt='Quality Logo'/>
                    </div>

                    <List className={classes.navigationList}>

                        {routes.map((route,index) => {
                            
                            return(
                                <React.Fragment>
                                    {route.path === '/sign-out' && (
                                        <div className={classes.navigationSpacer}></div>
                                    )}
                                    <ItemsMenu
                                        label= {route.label}
                                        icon={route.icon} 
                                        activeIcon={route.activeIcon} 
                                        path={route.path}
                                    />
                                </React.Fragment>
                            )
                        })}
                    
                    </List>

                 {/* End Navigation  */}
                
            </Drawer>
            {/* End Drawer */}


            {/* Set routes Links for pages */}
            <div>
                <div className={classes.appBarSpacer}></div>
                <main 
                    className={clsx(classes.content, {
                    [classes.contentShift]: open
                    })}
                >
                    <Switch>
                        {
                        routes.map((route, index) => {
                            return (
                            <Route exact path={route.path} key={index}>
                                {route.component}
                            </Route>
                            );
                        })
                        }
                    </Switch>
                </main>  
            </div>
            {/* End set routes for pages*/}
        </div>      
    )
}
