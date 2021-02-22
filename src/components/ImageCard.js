import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CommentOutlined } from '@material-ui/icons';

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

  rightIcon: {
    marginLeft: 'auto',
  },
}));

const ImageCard = (props) => {
  const {previewURL,webformatURL,user,userImageURL} = props;
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
            Likes: 4000
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}

export default  ImageCard;
