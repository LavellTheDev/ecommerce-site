import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

// import logo from '../../assets/commerce.png'
import useStyles from './styles';


const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className="classes.title" color="inherit">
            <img src ="" alt ="KHFWorldWide" height = "25px" className={classes.image} />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label= "Show cart items" color="inherit">
              <badge badgeContent={2} color= "secondary">
                <ShoppingCart />
              </badge>
            </IconButton>
          </div>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Navbar
