import React from 'react'
import {
    make,
    Grid,
    makeStyles,
} from '@material-ui/core'
import FancyPushButton from '../../components/Fancy/PushButton';

const useStyles = makeStyles((theme) => ({
    buttonBar: {
        overlowX: 'hidden',
    }
}));

const ButtonBar = ({ }) => {
    const classes = useStyles();
    return (
        <Grid container direction='row' justify='space-around' alignItems='center' spacing={2} className={classes.buttonBar}>
            <Grid container item justify='center' xs={12} sm={4} lg={3}>
                <FancyPushButton text='ثبت‌نام' color='green' />
            </Grid>
            <Grid container item justify='center' xs={12} sm={4} lg={3}>
                <FancyPushButton text='اطلاعیه‌ها' />
            </Grid>
            <Grid container item justify='center' xs={12} sm={4} lg={3}>
                <FancyPushButton text='مشخصات من' color='orange' />
            </Grid>
        </Grid>
    )
}

export default ButtonBar;