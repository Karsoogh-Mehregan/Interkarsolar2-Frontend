import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

function LoginButton({ name, to, ...rest }) {
  const classes = useStyles();

  const show = () => {
    toast.info('ثبت‌نام هنوز شروع نشده! یکم دیگه هم وایسین تا سایت درست بشه :))))',
      {
        position: 'bottom-right',
      }
    )
  }

  return (
    <Button variant='contained' onClick={show} color='primary' size='large' className={classes.button} >
      <Typography variant='inherit' align='center'>
        ورود به سفینه
      </Typography>
    </Button>
  );
}


export default LoginButton;