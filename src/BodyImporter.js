import React from 'react'

import { useStyle } from './Styles';

import { Navigation } from './components/Navigation';
import clsx from 'clsx';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

export const BodyImporter = () => {

const classes = useStyle();

    return (
        <Navigation/>,
        <div>
          <div className={classes.appBarSpacer}></div>
          <main 
            className={clsx(classes.content, {
              [classes.contentShift]: false
            })}
          >
          <div className={classes.drawerHeader} />
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
    )
}
