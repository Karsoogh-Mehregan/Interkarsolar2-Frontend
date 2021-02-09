import React from 'react'
import {
    make,
    Grid,
    makeStyles,
} from '@material-ui/core'
import FancyPushButton from '../../components/Fancy/PushButton';

const useStyles = makeStyles((theme) => ({
    buttonBar: {
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            bottom: theme.spacing(4),
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(4),
        }
    }
}));

const ButtonBar = ({ onClick }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
            spacing={2}
            xs={12}
            lg={8}
            className={classes.buttonBar}>
            <Grid container item justify='center' xs={12} sm={4} lg={3}>
                <FancyPushButton text='اطلاعیه‌ها' onClick={() => onClick(0)} />
            </Grid>
            <Grid container item justify='center' xs={12} sm={4} lg={3}>
                <FancyPushButton text='ثبت‌نام' color='green' onClick={() => onClick(1)} />
            </Grid>
            <Grid container item justify='center' xs={12} sm={4} lg={3}>
                <FancyPushButton text='مشخصات من' color='dark-blue' onClick={() => onClick(2)} />
            </Grid>
        </Grid>
    )
}

export default ButtonBar;