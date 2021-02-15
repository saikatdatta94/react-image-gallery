import Header from "./components/Header";
import Content from "./components/Content";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <>
    <Grid spacing={2} container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item>
        <Content/>
      </Grid>

      
    </Grid>
    </>
  );
}

export default App;
