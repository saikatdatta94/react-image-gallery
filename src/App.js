import Header from "./components/Header";
import Content from "./components/Content";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid container item>    
        
        <Grid md={2} item>
          
        </Grid>
        <Grid md={8} item>
          <Content/>
        </Grid>
        <Grid md={2} item>
          
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
