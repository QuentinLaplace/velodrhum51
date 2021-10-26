import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { headerStyle } from "../../assets/css/header";
import BigHeader from './bigHeader';
import SmallHeader from "./smallHeader";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setDrawer } from '../../actions/drawer';



const Header: FunctionComponent<{}> = ({ }) => {
    const classes = headerStyle();
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector(state => (state.drawer));

    const setHeader = (): React.ReactElement => {
      if(isOpen){
        return <SmallHeader></SmallHeader>;
      }
      else{
        return <BigHeader></BigHeader>;
      }
    }

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { dispatch(setDrawer(!isOpen)) }}>
                  <MenuIcon />
              </IconButton>
             {setHeader()}
            </Toolbar>
          </AppBar>
        </div>
    );
}

export default Header;