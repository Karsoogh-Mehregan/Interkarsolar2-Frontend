import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  imageWidget: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'fill',
    borderRadius: 10,
  },
}));

const ImageWidget = ({ link = '', alt }) => {
  const classes = useStyles();
  return <img src={link} className={classes.imageWidget} alt={alt} />;
};

export default ImageWidget;
