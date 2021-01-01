import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Auth, Storage} from 'aws-amplify'
import ImageCard from './ImageCard'
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImageModal from './ImageModal'
import firebase from '../firebase'

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

const imageDataModel = user => {
    return {
        "avatarInitial": user.username.charAt(0),
        "imageName": "",
        "imageId": "",
        "title": "",
        "date": "",
        "imageSrc": "",
        "description": "",
        "color": "#FF0000"
    }
}

const MainPage = props => {
    const classes = useStyles();
    const [imagesData, setImagesData] = useState([])
    
    const [imageModalOpen, setImageModalOpen] = useState(false)
    const [imageModalAction, setImageModalAction] = useState('CREATE')
    const [imageModalData, setImageModalData] = useState(imageDataModel(props.authData.user))
    const [db, setDb] = useState(null)

    //Auth redirect and initialize images data
    useEffect(() => {
        if (!props.authData.authenticated) {
            setDb(null)
            setImagesData([])
            props.history.push("/login")
        }

        setDb(firebase.firestore())
    }, [props.authData.authenticated])

    useEffect(() => {
        if (db != null) {
            initializeImageData()
        }
    }, [db])

    const initializeImageData = async () => {
        let email = props.authData.user.username
        let imagesData = []
        try {
            const snapshot = await db.collection(email).get()
            imagesData = snapshot.docs.map(doc => {
                return Object.assign({}, doc.data(), { 
                    "avatarInitial": props.authData.user.username.charAt(0),
                    "imageId": doc.id
                })
            })
        } catch(err) {
            alert("Issue in retrieving image data", err)
            return
        }

        for (let i =0; i<imagesData.length; i++) {
            let image = imagesData[i]
            await Storage.get(image.imageId, {level: 'private'})
                .then(res => {
                    image.imageSrc = res
                })
                .catch((err) => {
                    alert("Issue retrieving image, blank image will be used", err)
                    //TODO update this to an actual image in resources
                    image.imageSrc = ""
                })
        }
        setImagesData(imagesData)
    }

    const onImageCardUpdateClick = imageData => {
        setImageModalAction('UPDATE')
        setImageModalData(imageData)
        setImageModalOpen(true)
    }

    const resetImageData = () => {
        setImageModalData(imageDataModel(props.authData.user))
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    //DELETEING IMAGE
    const deleteImage = async (id) => {
        debugger
        try {
            await db.collection(props.authData.user.username).doc(id).delete()
        } catch(err) {
            alert("Error deleting image data")
        }

        try {
            await Storage.remove(id, { level: 'private' })
        } catch(err) {
            alert("Error deleting image data")
        }
        let tempData = imagesData
        tempData = tempData.filter(img => {
            return img.imageId != id
        })
        setImagesData(tempData)
    }

    //UPDATING IMAGE
    const updateImg = imageData => {
        //open modal and allow for image updating
    }

    //CREATING IMAGE
    const createNewImage = async (data, file) => {
        debugger
        let email = props.authData.user.username
        let id = new Date().valueOf() + "-" + email
        debugger
        try {
            await db.collection(email).doc(id).set({
                imageName: file.name,
                title: data.title,
                description: data.description,
                date: new Date().toISOString().split('T')[0],
                color: data.color
            })
        } catch (err) {
            alert("Error persisting image data", err)
            return
        }

        try{
            await Storage.put(id, file, {
                level: 'private',
                contentType: 'image/png'
            })
        }catch(err) {
            alert("Error persisting image", err)
        }

        let imageSrc = await toBase64(file)
        let imageDataObj = {
            "imageName": file.name,
            "title": data.title,
            "description": data.description,
            "date": new Date().toISOString().split('T')[0],
            "color": data.color,
            "imageId": id,
            "avatarInitial": email.charAt(0),
            "imageSrc": imageSrc
        }
        setImagesData([...imagesData, imageDataObj])
    }

    return (
        <div>
            <ImageModal createNewImage={(imageData, file) => createNewImage(imageData, file)} imageModalData={imageModalData} setImageModalData={setImageModalData} imageModalOpen={imageModalOpen} setImageModalOpen={(state) => setImageModalOpen(state)} action={imageModalAction} />
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
                            return <ImageCard deleteImg={() => deleteImage(img.imageId)} updateImage={() => onImageCardUpdateClick(img)} key={id} imageData={img}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage