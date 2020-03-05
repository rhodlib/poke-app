import {makeStyles} from '@material-ui/styles';

export default makeStyles({
    linkContainer: {
        textDecoration: 'none',
    },
    cardContainer: {
        width: "110px",
        height: "110px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        "&:hover": {
                transform: "scale(1.1)",
            }
    },
    imageMenuCard: {
        width: "72px",
        margin: '5px'
    },
    title: {
        textAlign: 'center',
    },
})