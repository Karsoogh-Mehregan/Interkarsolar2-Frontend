import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.secondary,
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
}));

export default function AppBarButton({ name, to }) {
  const classes = useStyles();
  return (
    <Button variant='contained' color='primary' size='small' href={to} className={classes.button}>
      {name}
    </Button>
  );
}
