import { makeStyles } from '@material-ui/core/styles';

const carouselStyle = makeStyles({
    root:{
        margin: 0,
    },
    img:{
        width: "100%",
    },
    box:{
        position: 'absolute',
        width: '50%',
        marginLeft: '25%',
        top: 0,
        boxShadow: 'none',
        background: 'none',
        textAlign: 'center',
        marginTop: '30px'
    }
});

export { carouselStyle };