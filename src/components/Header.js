import React, {useState} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
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
    borderRadius: 4,
    color: 'blue',
    backgroundColor: 'white',
  },
  iconButton: {
    padding: 10,
    marginRight: 8,
    color: 'white',
  },
}));


const Header = ({searchPhrase}) => {
  
  const [text,setText] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    searchPhrase(text);
    console.log("From Header:  "+text);
  }

  const handleChange = (e) =>{
    e.preventDefault();
    setText(e.target.value);
  }

  const classes = useStyles();
  return (
    <AppBar color="secondary" elevation={0} className={classes.root}  position="static">
        <Toolbar  onSubmit={handleSubmit} component="form" >
            <InputBase
                classes={{input:classes.input}}
                placeholder="  Search Images"
                value={text}
                onChange={handleChange}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    
  );
}

export default Header;