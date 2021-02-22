import Header from "./components/Header";
import Content from "./components/Content";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gapTop:{
      marginTop: 16,
    }
})

function App() {

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid className={classes.gapTop} container item>    
        
        <Grid md={1} item>
          
        </Grid>
        <Grid md={10} item>
          <Content/>
        </Grid>
        <Grid md={1} item>
          
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
