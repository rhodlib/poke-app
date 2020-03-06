import React, { useEffect } from 'react';
import CardContainer from '../../components/CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import {getBerries} from '../../redux/actions/berries';
import {berriesResult} from '../../redux/selectors';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress, Grid, Button } from '@material-ui/core';
import BerriesTableComponent from '../../components/BerriesTableComponent';
import {withRouter} from 'react-router';
import styles from './style';

export const BerriesList = ({history}) => {
    const classes = styles();
    const dispatch = useDispatch();
    const berries = useSelector(state => berriesResult(state));

    useEffect(()=> {
        dispatch(getBerries());
    },[dispatch])

    const renderTables = (berries) => {
        return berries === undefined ? <LinearProgress /> :
        <BerriesTableComponent berries={berries}/>
    }

    const handleClickBack = () => {
        history.push('/');
    }

    return (
        <Grid className={classes.gridContainer}>
            <CardContainer>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Berry</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Info</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {renderTables(berries)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContainer>
            <Button variant="contained" color="secondary" onClick={handleClickBack}>To Home</Button>
        </Grid>
    )
};

export default withRouter(BerriesList);