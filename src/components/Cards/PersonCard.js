import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    // height: '100%',
    width: '100%' ,
    maxWidth: '20rem',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    boxShadow: '0 0 3rem -1rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
    maxWidth: '300px',
    '&:hover': {
      transform: 'translateY(-0.5rem) scale(1.0125)',
      boxShadow: '0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5)',
    }
  },
  media: {
    height: '300px',
  },
  icon: {
    textAlign: 'center',
  },
});

const PersonCard = ({ }) => {
  const classes = useStyles();

  return (
    <Card className='card' className={classes.root}>
      <CardActionArea disabled>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/Seyyed_Alireza_Hashemi.jpeg'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {'سید علیرضا هاشمی'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {'مسئول فیل‌کردن رویداد'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
