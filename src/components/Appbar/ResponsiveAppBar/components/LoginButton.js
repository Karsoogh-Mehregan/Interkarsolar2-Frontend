import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1) / 2,
  },
}));

function LoginButton({ name, to, ...rest }) {
  const classes = useStyles();

  return (
    <Button variant='contained' href='/login' color='primary' size='large' className={classes.button} >
      <Typography variant='inherit' align='center'>
        {'ورود به سفینه'}
      </Typography>
    </Button>
  );
}


export default LoginButton;