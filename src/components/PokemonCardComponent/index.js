import React from 'react';
import styles from './style';
import { Card, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

export const PokemonCardComponent = ({index, title, path = "/#"}) => {
    const classes = styles();

    return (
        <Link to={`/pokemon/${title}`} className={classes.linkContainer}>
            <Card>
                <img src={`/model/${index}.png`} alt={title}/>
                <Typography className={classes.title}>
                    {`#${index} - ${title}`}
                </Typography>
            </Card>    
        </Link>
    )
};

export default PokemonCardComponent;