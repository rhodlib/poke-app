import React, { useEffect } from 'react';
import CardContainer from '../../components/CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import {getBerries} from '../../redux/actions/berries';
import {berriesResult} from '../../redux/selectors';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress } from '@material-ui/core';
import BerriesTableComponent from '../../components/BerriesTableComponent';

export const BerriesList = () => {
    const dispatch = useDispatch();
    const berries = useSelector(state => berriesResult(state));

    useEffect(()=> {
        dispatch(getBerries());
    },[dispatch])

    const renderTables = (berries) => {
        return berries === undefined ? <LinearProgress /> :
        <BerriesTableComponent berries={berries}/>
    }

    return (
        <CardContainer small={true}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Berry</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTables(berries)}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContainer>
    )
};

export default BerriesList;