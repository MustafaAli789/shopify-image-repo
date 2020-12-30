import {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { SliderPicker } from 'react-color';
import Typography from '@material-ui/core/Typography';
import {DropzoneArea} from 'material-ui-dropzone'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const ImageModal = props => {
    let action = props.action == "CREATE" ? 'Create' : 'Update'
    
    const useStyles = makeStyles(theme => createStyles({
        previewChip: {
          minWidth: 160,
          maxWidth: 210
        },
      }));

    let classes = useStyles();
    
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
                    onChange={e => props.setImageTitle(e.target.value)}
                    value={props.imageTitle}
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
                    onChange={e => props.setImageDesc(e.target.value)}
                    value={props.imageDesc}
                />
                <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.54)", marginBottom: "0.25rem" }}>
                        Tag Color
                    </Typography>
                    <SliderPicker
                        color={props.imageColor}
                        onChangeComplete={(color) => props.setImageColor(color.hex)}>
                    </SliderPicker>
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.54)", marginBottom: "0.25rem" }}>
                            File Uploader
                    </Typography>
                    <DropzoneArea
                        initialFiles = {props.imageFile != null ? [props.imageFile] : []}
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(files) => props.setImageFile(files[0])}
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
            <Button onClick={() => props.setImageModalOpen(false)} color="primary">
                {action}
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ImageModal