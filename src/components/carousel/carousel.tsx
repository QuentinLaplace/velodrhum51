import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import Item from './item';


const Header: FunctionComponent<{}> = ({ }) => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
/*        {
            name: "Random Name #2",
            description: "Hello World!"
        }*/
    ];

    return (
        <div>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} title={item.name} description={item.description} /> )
                }
            </Carousel>
        </div>
    );
}

export default Header;