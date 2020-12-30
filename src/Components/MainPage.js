import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Auth, Storage} from 'aws-amplify'
import ImageCard from './ImageCard'
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImageModal from './ImageModal'

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
    const [imageModalOpen, setImageModalOpen] = useState(false)
    const [imageModalAction, setImageModalAction] = useState('CREATE')
    
    const [imageTitle, setImageTitle] = useState("")
    const [imageColor, setImageColor] = useState("#FF0000")
    const [imageFile, setImageFile] = useState(null)
    const [imageDesc, setImageDesc] = useState("")

    useEffect(() => {
        if (!props.authData.authenticated) {
            props.history.push("/login")
        }
    }, [props.authData.authenticated])

    const urltoFile = (url, filename, mimeType) => {
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );
    }

    let updateImage = async imageData => {
        setImageModalAction('UPDATE')
        setImageColor(imageData["color"])
        setImageDesc(imageData["description"])
        setImageTitle(imageData["title"])
        let imgFile = await urltoFile(imageData["img"], imageData["imageName"], "image/png")
        debugger
        setImageFile(imgFile)
        setImageModalOpen(true)
    }

    useEffect( async () => {
        // on initial load, get all images from s3

        try{
            let photos = await Storage.list('', {level: 'private'})
            console.log(photos)
            photos.forEach(photo => {
                Storage.get(photo.key, {level: 'private'})
                    .then(res => {
                        let imageData = {
                            "avatarInitial": "M",
                            "imageName": photo.key,
                            "title": "Random Moment in Time",
                            "date": "September 1 2001",
                            "image": res,
                            "description": "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
                            "color": "#FF0000",
                            "imageId": "asfe343e24233 t4"
                        }
                        setImagesData([...imagesData, imageData])
                    })
            });
        } catch(err) {
            console.log(err)
        }
    }, [])

    const resetImageData = () => {
        setImageColor("#FF0000")
        setImageTitle("")
        setImageDesc("")
        setImageFile(null)
    }


    const deleteImage = id => {
        //perform s3 deletion
    }

    const updateImg = imageData => {
        //open modal and allow for image updating
    }

    const createNewImage = imageData => {
        
    }

    return (
        <div>
            <ImageModal imageDesc={imageDesc} imageFile={imageFile} imageTitle={imageTitle} imageColor={imageColor} setImageTitle={setImageTitle} setImageColor={setImageColor} setImageFile={setImageFile} setImageDesc={setImageDesc} imageModalOpen={imageModalOpen} setImageModalOpen={(state) => setImageModalOpen(state)} action={imageModalAction} />
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
            <div className="content" style={{ padding: "0px 16px 0px 16px" }}>
                {/* <Typography variant="subtitle2">
                    Hey {props.authData.user != null ? props.authData.user.username : "none"}. Welcome to your image repo. Add, update and delete images as you please.
                </Typography> */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.8rem' }}>
                    <IconButton onClick={() => {
                        resetImageData()
                        setImageModalAction('CREATE')
                        setImageModalOpen(true)
                    }} size="medium" style={{ width: "100%", borderRadius: "10px" }} aria-label="Add a photo">
                        <AddAPhotoIcon style={{ width:'1.5em', height: '1.5em' }} />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', flexFlow: 'row wrap', marginTop: '1rem' }}>
                    {
                        imagesData.map((img, id) => {
                            return <ImageCard updateImage={(imgData) => updateImage(imgData)} key={id} imageData={img}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage