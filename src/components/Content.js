import React,  {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from "./ImageCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   bigMarginTop: {
       marginTop: 100,
   }
}));


const Content = ({searchPhrase}) =>{

    const classes = useStyles();

    const [images,setImages] = useState([]);
    const [isLoading,setIsloading] = useState(true);

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchPhrase}s&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setIsloading(false);
        })
        .catch(e => console.log(e))
    },[searchPhrase])

    return(
        
            <Grid container spacing={2}>
                {!isLoading && images.length===0 && <Grid className={classes.bigMarginTop} justify="center" alignItems="center" container><Typography variant="h5">No items Found</Typography></Grid>}
                {isLoading?
                    <Grid justify="center" alignItems="center" direction="column"  container><CircularProgress /></Grid>
                    :
                    
                    images.map((image)=>{
                        return(
                            <Grid key={image.id} md={4} sm={6} xs={12} item>
                                <ImageCard {...image} />
                            </Grid>
                        )
                    })
                    }
                
            </Grid>
        
          
               
    );
    
}
export default Content;