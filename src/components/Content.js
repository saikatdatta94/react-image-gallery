import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from "./ImageCard";

const Content = () =>{

    const getCoffeeCard = (coffeeMakerObject) => {
        return (
            <Grid item xs={12} sm={4}>
                
            </Grid>
        )

    }

    return(
        // <></>
        <Grid item>
            <Grid container spacing={2}>
                <Grid  md={4} item>
                    <ImageCard/>
                </Grid>
                <Grid md={4} item>
                    <ImageCard/>
                </Grid>
                <Grid md={4} item>
                    <ImageCard/>
                </Grid>
                <Grid md={4} item>
                    <ImageCard/>
                </Grid>
                <Grid md={4} item>
                    <ImageCard/>
                </Grid>
            </Grid>
        </Grid>
        
          
               
    );
    
}
export default Content;