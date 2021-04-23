import React,{ useEffect } from 'react';
import _ from 'lodash';
import {
  Button,
  Container,
  makeStyles,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
//import { Staff as StaffInfo, subteams } from './StaticData';
import ResponsiveAppBar from '../../components/Appbar/ResponsiveAppBar';
import Footer from '../../components/Footer/Footer';
import PersonCard from '../../components/Cards/PersonCard';

import { getLandingData } from '../../redux/actions/landing';


const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        padding: theme.spacing(4, 2),
        //backgroundColor: '#BD8A69',
        //color: 'white',
      },
  
}));

function Staff({ members = [], getLandingData }) {
  useEffect(() => {
    getLandingData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction='row'>
        <Grid container item direction='column'>
        <Grid
            container item
            direction="row"
            spacing={4}
            justify='center'
            alignItems='center'
            className={classes.personCard}>
            {
              _.shuffle(members).slice(0, 4).map((member) => {
                return (
                  <Grid container item xs={12} sm={6} md={3} justify='center'>
                    <PersonCard
                      name={member.name}
                      position={member.position}
                      description={member.description}
                      image={member.image} />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

/* const mapStateToProps = (state, ownProps) => ({
});*/

const mapStateToProps = (state) => ({
  members: state.landing.members,
});
export default connect(
  mapStateToProps
  , { getLandingData }
)(Staff);
