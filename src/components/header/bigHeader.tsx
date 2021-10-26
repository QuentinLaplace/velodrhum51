import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { headerStyle } from "../../assets/css/header";
import logo from '../../assets/img/logo.png';



const BigHeader: FunctionComponent<{}> = ({ }) => {
    const classes = headerStyle();

    return (
        <div className={classes.root}>
            <img src={logo} alt='' className={classes.logo}></img>
            

            <Button className={classes.button}>
                <BusinessIcon></BusinessIcon>
                <Typography>
                    BUSINESS
                </Typography>
            </Button>

            <Button className={classes.button}>
                <CloudUploadIcon></CloudUploadIcon>
                <Typography>
                    CLOUD
                </Typography>
            </Button>

            <Button className={classes.button}>
                <BuildIcon></BuildIcon>
                <Typography>
                    BUILD
                </Typography>
            </Button>
        </div>
    );
}

export default BigHeader;