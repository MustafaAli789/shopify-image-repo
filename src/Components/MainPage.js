import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Auth, Storage} from 'aws-amplify'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

    useEffect(() => {
        if (!props.authData.authenticated) {
            props.history.push("/login")
        }
    }, [props.authData.authenticated])

    const onChange = (e) => {
        const file = e.target.files[0];
        Storage.put('example.png', file, {
            level: 'private',
            contentType: 'image/png'
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));
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
            <h1>Hey {props.authData.user != null ? props.authData.user.username : "none"}</h1>
            <input
              type="file" accept='image/png'
              onChange={(evt) => onChange(evt)}
          />
        </div>
    )
}

export default MainPage