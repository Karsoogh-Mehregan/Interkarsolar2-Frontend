import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
}));

function LoginButton({ name, to, ...rest }) {
  const classes = useStyles();

  const doLogin = () => {
    toast.info("هنوز نمی‌تونی وارد بشی! ثبت‌نام از ۲۵ بهمن شروع میشه")
  }

  return (
    <Button variant='contained' onClick={() => doLogin()} color='primary' size='large' className={classes.button}>
      ورود به سفینه‌ی فضایی
    </Button>
  );
}


export default connect(
  undefined,
  {
  }
)(LoginButton);