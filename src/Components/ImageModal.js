import {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { SliderPicker } from 'react-color';
import Typography from '@material-ui/core/Typography';
import {DropzoneArea} from 'material-ui-dropzone'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const ImageModal = props => {
    let action = props.action == "CREATE" ? 'Create' : 'Update'

    const [imageTitle, setImageTitle] = useState("")
    const [imageColor, setImageColor] = useState("#FF0000")
    const [imageFile, setImageFile] = useState("")
    const [imageDesc, setImageDesc] = useState("")
    
    const [file, setFile] = useState(null)

    useEffect(() => {
        setImageTitle(props.imageModalData["title"])
        setImageColor(props.imageModalData["color"])
        setImageFile(props.imageModalData["imageSrc"])
        setImageDesc(props.imageModalData["description"])

        if (props.imageModalData["imageSrc"] != "") {
            let img = new File([""], props.imageModalData["imageName"],{type: "image/png"})
            setFile(img)
        } else {
            setFile(null)
        }
    }, [props.imageModalOpen])
    
    const useStyles = makeStyles(theme => createStyles({
        previewChip: {
          minWidth: 160,
          maxWidth: 210
        },
      }));

    let classes = useStyles();

    const validateData = (title, file) => {
        let titleError = ""
        let fileError = ""
        debugger
        if (title.trim().length == 0) {
            titleError = "Title must not be empty"
        } else {
            titleError = ""
        }
        if (file == null) {
            fileError = "Must attach an image"
        } else {
            fileError = ""
        }

        if (titleError.length > 0 && fileError.length > 0) {
            alert(titleError +  " and " + fileError)
        } else if (titleError.length > 0) {
            alert(titleError)
        } else if (fileError.length > 0) {
            alert(fileError)
        } else {
            return true
        }

        return false

    }
    
    return (
        <Dialog open={props.imageModalOpen} aria-labelledby="form-dialog-title">
            <DialogTitle style={{ paddingBottom: "0" }} id="form-dialog-title">{action}</DialogTitle>
            <DialogContent style={{ paddingTop: "0" }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="imageName"
                    placeholder="Image Name"
                    type="text"
                    fullWidth
                    style={{ marginTop: "0.6rem" }}
                    onChange={e => setImageTitle(e.target.value)}
                    value={imageTitle}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="imageDesc"
                    placeholder="Image Description"
                    type="text"
                    fullWidth
                    multiline
                    rows={1}
                    rowsMax={4}
                    style={{ marginTop: "0.8rem" }}
                    onChange={e => setImageDesc(e.target.value)}
                    value={imageDesc}
                />
                <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.54)", marginBottom: "0.25rem" }}>
                        Tag Color
                    </Typography>
                    <SliderPicker
                        color={imageColor}
                        onChangeComplete={(color) => setImageColor(color.hex)}>
                    </SliderPicker>
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.54)", marginBottom: "0.25rem" }}>
                            File Uploader
                    </Typography>
                    <DropzoneArea
                        initialFiles = {file != null ? [file] : []}
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(files) => {
                            console.log(files)
                            if (files[0] == undefined) {
                                setFile(null)
                            } else {
                                setFile(files[0])
                            }
                        }}
                        filesLimit={1}
                        showPreviews={true}
                        showPreviewsInDropzone={false}
                        useChipsForPreview
                        previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                        previewChipProps={{classes: { root: classes.previewChip } }}
                        previewText="Selected files"
                    />
                </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => props.setImageModalOpen(false)} color="primary">
                Cancel
            </Button>
            <Button onClick={() => {
                    if (validateData(imageTitle, file)) {
                       if (props.action == "CREATE") {
                           props.createNewImage({
                               "imageTitle":imageTitle,
                               "description":imageDesc,
                               "color":imageColor,
                           }, file)
                       }
                    }
                }} 
                color="primary">
                {action}
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ImageModal