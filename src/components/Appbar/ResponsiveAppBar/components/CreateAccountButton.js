import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

function CreateAccountButton({ name, to, ...rest }) {
  const classes = useStyles();
  return (
    <Button variant='contained' href='/create-account' color='primary' size='large' className={classes.button} >
      <Typography variant='inherit' align='center'>
        پیش‌ثبت‌نام
      </Typography>
    </Button>
  );
}


export default CreateAccountButton;