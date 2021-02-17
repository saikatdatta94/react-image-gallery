import React,  {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from "./ImageCard";

const Content = () =>{
    const [images,setImages] = useState([]);
    const [isLoading,setIsloading] = useState(true);
    const [searchPhrase,setSearchPhrase] = useState('');

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setIsloading(false);
        })
        .catch(e => console.log(e))
    },[])

    return(
        <Grid item>
            <Grid container spacing={2}>
                {images.map((image)=>{
                    return(
                        <Grid  md={4} item>
                            <ImageCard key={image.id} {...image} />
                        </Grid>
                    )
                })}
                
            </Grid>
        </Grid>
        
          
               
    );
    
}
export default Content;