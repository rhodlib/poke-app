import {makeStyles} from '@material-ui/styles';

export default makeStyles({
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '220px',
        justifyContent: 'center'
    },
    gridStatContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    statName: {
        textTransform: "capitalize",
    }
})