import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Auth, Storage} from 'aws-amplify'
import ImageCard from './ImageCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainPage = props => {
    const classes = useStyles();
    const [imagesData, setImagesData] = useState([])

    useEffect(() => {
        if (!props.authData.authenticated) {
            props.history.push("/login")
        }
    }, [props.authData.authenticated])

    useEffect(() => {
        // on initial load, get all images from s3
        let imageData = {
            "avatarInitial": "M",
            "title": "Random Moment in Time",
            "date": "September 1 2001",
            "imageSrc": "",
            "description": "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            "color": "green",
            "imageId": "asfe343e24233 t4"
        }
        setImagesData([imageData, imageData, imageData, imageData])
    }, [])

    const onChange = (e) => {
        const file = e.target.files[0];
        Storage.put('example.png', file, {
            level: 'private',
            contentType: 'image/png'
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));
    }

    const deleteImage = id => {
        //perform s3 deletion
    }

    const updateImg = imageData => {
        //open modal and allow for image updating
    }

    const createNewImage = imageData => {
        //perform neessary steps
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Shopify Image Repository
                </Typography>
                <Button color="inherit" onClick={() => {
                    props.authData.setAuth(false)
                    props.history.push("/login")
                    Auth.signOut()
                }}>Logout</Button>
                </Toolbar>
            </AppBar>
            <div className="content" style={{ padding: "16px 16px 0px 16px" }}>
                <Typography variant="subtitle2">
                    Hey {props.authData.user != null ? props.authData.user.username : "none"}. Welcome to your image repo. Add, update and delete images as you please.
                </Typography>
                <input
                    type="file" accept='image/png'
                    onChange={(evt) => onChange(evt)} />
                <div style={{ display: 'flex', flexFlow: 'row wrap', marginTop: '1rem' }}>
                    {
                        imagesData.map((img, id) => {
                            return <ImageCard key={id} imageData={img}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage