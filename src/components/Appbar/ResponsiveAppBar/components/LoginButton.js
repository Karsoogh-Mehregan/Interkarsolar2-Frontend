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

  const doLogin = () => {
    toast.info("هنوز نمی‌تونی وارد سفینه‌ات بشی! ثبت‌نام از ۲۵ بهمن شروع میشه")
  }

  return (
    <Button variant='contained' onClick={() => doLogin()} color='primary' size='large' className={classes.button} >
      <Typography variant='inherit' align='center'>
        ورود به سفینه
      </Typography>
    </Button>
  );
}


export default connect(
  undefined,
  {
  }
)(LoginButton);