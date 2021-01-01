
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
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
    const [open, setOpen] = useState(false)
   
    return (  
        <Card className={classes.root + " imageCard"}>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <img style={{ width: '100%' }} src={props.imageData.imageSrc} />
            </Dialog>
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
                className={'imageCard'}
                onClick={() => setOpen(true)}
                className={classes.media}
                image={props.imageData.imageSrc}
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