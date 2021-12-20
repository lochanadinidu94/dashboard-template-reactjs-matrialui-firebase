import React, { useEffect, useState } from 'react'

//@material-ui
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//internal
import {useStyle} from '../Styles'

import clsx from 'clsx';
import { Link ,useLocation } from 'react-router-dom';

export const ItemsMenu = ({label, icon, activeIcon, path, }) => {

    const classes = useStyle();

    const [active, setActive] = useState(true);

    const location = useLocation();

    useEffect(() => {
      if(path === '/sign-out'){
        setActive(true);
        return;
      }  
      setActive(location.pathname === path);
    },[location])

    return (
        <div className={classes.menuItemDiv}>
            <ListItem 
                button
                component={Link}
                to={path}
                className={clsx(classes.menuItem , active && classes.menuItemActive)}
            >
                <ListItemIcon>
                    <Icon>
                        <img 
                            className={classes.menuItemIcon} 
                            src={active? activeIcon : icon} 
                            alt={label}
                        />
                    </Icon>
                </ListItemIcon>
                <ListItemText
                    primary={label}
                    primaryTypographyProps={{ variant: "body2"}}
                />
            </ListItem>
        </div>
    )
}
