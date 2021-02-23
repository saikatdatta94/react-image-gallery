import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
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

  rightIcon: {
    marginLeft: 'auto',
  },
  bold:{
    fontStyle: 'bold',
  },
}));

const ImageCard = (props) => {
  const {previewURL,webformatURL,user,userImageURL,tags} = props;
  const tagArr = tags.split(",");
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions>
        <Grid spacing={1} container alignItems="center">
            <Grid item>
              <Avatar alt="Remy Sharp" src={userImageURL} />
            </Grid>
            <Grid item>
              <Typography>
                {`${user}`}
              </Typography>
            </Grid>
        </Grid>
      </CardActions>
    
      
        <CardMedia
          className={classes.media}
          image= {webformatURL}
          title="Paella dish"
        />
        <CardActions>
        <Grid spacing={1} container >
            <Grid item>
               <FavoriteBorderOutlinedIcon
                  fontSize="large"
                  className={classes.iconWeight}
               />
            </Grid>
            <Grid item>
                <ModeCommentOutlinedIcon 
                   fontSize="large"
                />
            </Grid>
            <Grid item>
                <SendOutlinedIcon
                   fontSize="large"
                   
                />
            </Grid>

            <Grid className={classes.rightIcon} item>
                <BookmarkBorderOutlinedIcon
                   fontSize="large"
                />
            </Grid>
        </Grid>
      </CardActions>
      <CardContent variant="body2" color="textSecondary">
        <Typography>
            <strong>Likes:</strong> 4000
            <br/>
            {tagArr.map((tag,index)=>{
              return(
                <strong key={index}> {` #${tag}`}</strong>
              )
            })}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}

export default  ImageCard;
