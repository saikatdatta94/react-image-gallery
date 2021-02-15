import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(2),
    paddingLeft: 10,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  iconButton: {
    padding: 10,
    marginRight: 8,
    color: 'white',
  },
}));

const Header = () => {
    const classes = useStyles();

  return (
    <AppBar className={classes.root}  position="static">
        <Toolbar component="form" >
            
            <InputBase
                className={classes.input}
                placeholder="  Search Images"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  );
}

export default Header;