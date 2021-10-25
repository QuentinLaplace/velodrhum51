import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Paper, Button, CardMedia } from '@material-ui/core';
import image from "../../assets/img/carousel1.jpg";
import { carouselStyle } from "../../assets/css/carousel";

interface ItemProps {
    title: string,
    description: string,
    img?: string
}

const Item: FunctionComponent<ItemProps> = ({ title, description, img}) => {
    const carouselClasses = carouselStyle();

    return (
        <div className={carouselClasses.root}>
            <img src={image} alt="test" className={carouselClasses.img}/>
            <Paper className={carouselClasses.box}>
                <h2>{title}</h2>
                <p>{description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        </div>
    );
}

export default Item;