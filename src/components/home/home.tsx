import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import packageJSON from '../../../package.json';
import Typography from '@material-ui/core/Typography';
import { homeStyle } from '../../assets/css/home';
import Header from '../header/header';

//import { useAppSelector, useAppDispatch } from "../../hooks";


const Home: FunctionComponent<{}> = ({ }) => {

    const homeClasses = homeStyle();
    //const dispatch = useAppDispatch();
    //const { map, center } = useAppSelector(state => (state.map));

    useEffect(() => {
        //log version number for further debug purpose
      }, []);
      
    return (
        <div> 
            <Header></Header>
        </div>
    );
}

export default Home;