import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
  },
}));

export default function MobileListButton({ name, to, ...rest }) {
  const classes = useStyles();
  return (
    <Button size='large' href={to} >
      {name}
    </Button>
  );
}
