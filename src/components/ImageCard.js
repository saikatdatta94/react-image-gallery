import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip'
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 64,
    paddingTop: '56.25%', // 16:9
  },
  content:{
    
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ImageCard = (props) => {
  const {previewURL,webformatURL} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image= {webformatURL}
        title="Paella dish"
      />
      <CardContent className={classes.content}>
        <Typography>
          <b>Photo by John Doe</b>
          <br/>
          <span><b>Views:</b> 4000</span>
          <br/>
          <span><b>Downloads:</b> 4000</span>
          <br/>
          <span><b>Likes:</b> 4000</span>
        </Typography>  
      </CardContent>
      <CardActions>
        <Grid spacing={1} container>
          <Grid item>
            <Chip
              label="Img tag"
              color="secondary"
            />
          </Grid>
          <Grid item>
            <Chip
              label="Img tag"
              color="secondary"
            />
          </Grid>
          <Grid item>
            <Chip
              label="Img tag"
              color="secondary"
            />
          </Grid>
          <Grid item>
            <Chip
              label="Img tag"
              color="secondary"
            />
          </Grid>
          <Grid item>
            <Chip
              label="Img tag"
              color="secondary"
            />
          </Grid>
          
        </Grid>
        
        
      </CardActions>
      
      
    </Card>
  );
}

export default  ImageCard;
