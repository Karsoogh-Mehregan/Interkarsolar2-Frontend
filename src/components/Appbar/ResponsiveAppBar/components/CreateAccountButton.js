import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1) / 2,
  },
}));

function CreateAccountButton({ name, to, ...rest }) {
  const classes = useStyles();
  return (
    <Button variant='contained' href='/create-account' color='primary' size='large' className={classes.button} >
      <Typography variant='inherit' align='center'>
        {'ساختن سفینه'}
      </Typography>
    </Button>
  );
}


export default CreateAccountButton;