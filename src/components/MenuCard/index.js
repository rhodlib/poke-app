import React from 'react';
import styles from './style';
import { Link } from 'react-router-dom';
import { Card, Typography } from '@material-ui/core';

export const MenuCard = ({title, path = "/#", url}) => {
    const classes = styles();
    return (
        <Link to={path} className={classes.linkContainer}>
            <Card className={classes.cardContainer}>
                <img src={url} alt={title} className={classes.imageMenuCard}/>
                <Typography className={classes.title}>
                    {title}
                </Typography>
            </Card>
        </Link>
    ); 
}

export default MenuCard;