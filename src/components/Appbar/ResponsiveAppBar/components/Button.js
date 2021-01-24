import {
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

export default function AppBarButton({ name, to, ...rest }) {
  const classes = useStyles();
  return (
    <Button variant='contained' {...rest} color='primary' size='large' href={to} className={classes.button}>
      <Typography variant='inherit' align='center'>
        {name}
      </Typography>
    </Button>
  );
}
