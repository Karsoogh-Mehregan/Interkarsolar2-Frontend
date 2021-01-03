import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    height: '100vh',
  },
}))


const PaymentStatus = ({

}) => {
  const classes = useStyles();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const authority = urlParams.get('Authority');
  const status = urlParams.get('Status');
  if (authority && status) {
    verifyPayment(authority, status, THIS_YEAR);
  }


  return (
    <Container className={classes.root}>
      <Grid>
        this is Exam tab
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(
  mapStateToProps,
  {

  }
)(PaymentStatus);