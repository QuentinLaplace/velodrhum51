import * as React from 'react';
import { FunctionComponent } from 'react';
import { headerStyle } from "../../assets/css/header";
import Drawer from '@material-ui/core/Drawer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setDrawer } from '../../actions/drawer';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';

const SmallHeader: FunctionComponent<{}> = ({ }) => {
    const classes = headerStyle();
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector(state => (state.drawer));

    return (
        <div className={classes.root}>
            <Drawer 
                open={isOpen} 
                onClose={() => dispatch(setDrawer(!isOpen))}
            >
                <Button>
                    <BusinessIcon></BusinessIcon>
                    <Typography>
                        BUSINESS
                    </Typography>
                </Button>

                <Button>
                    <CloudUploadIcon></CloudUploadIcon>
                    <Typography>
                        CLOUD
                    </Typography>
                </Button>

                <Button>
                    <BuildIcon></BuildIcon>
                    <Typography>
                        BUILD
                    </Typography>
                </Button>
            </Drawer>
        </div>
    );
}

export default SmallHeader;