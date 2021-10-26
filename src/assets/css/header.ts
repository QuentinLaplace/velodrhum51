import { makeStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      display: 'none',
          ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block'
        }
    },
    button:{
        display: 'block',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        },
        color: 'white !important',
    },
    logo:{
        display:'block',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    }
}));

  export { headerStyle };