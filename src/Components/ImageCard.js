
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import './ImageCard.css'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const ImageCard = props => {

	const classes = useStyles();
	const avatarStyle = {backgroundColor: props.imageData.color}
   
    return (
        <Card className={classes.root + " imageCard"}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={avatarStyle}>
                    {props.imageData.avatarInitial}
                </Avatar>
                }
                title={props.imageData.title}
                subheader={props.imageData.date}
            />
            <CardMedia
                className={classes.media}
                image={props.imageData.image}
                title={props.imageData.imageId}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
					{props.imageData.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => props.updateImage(props.imageData)}>
                	Update
                </Button>
                <Button size="small" color="primary">
                	Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default ImageCard;