import Header from "./components/Header";
import Content from "./components/Content";
import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gapTop:{
      marginTop: 16,
    }
})

function App() {

  const classes = useStyles();
  
  const [searchPhrase,setSearchPhrase] = useState('');

  useEffect(()=>{
   console.log("From App: "+searchPhrase);
  },[searchPhrase])

  return (
    <Grid container direction="column">
      <Grid item>
        <Header searchPhrase={(text)=>setSearchPhrase(text)} />
      </Grid>
      <Grid className={classes.gapTop} container item>    
        
        <Grid md={1} xs={false} item>
          
        </Grid>
        <Grid md={10} xs={12} item>
          <Content searchPhrase={searchPhrase}/>
        </Grid>
        <Grid md={1} xs={false} item>
          
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
