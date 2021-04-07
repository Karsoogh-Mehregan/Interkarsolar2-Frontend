import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import {
  login,
} from '../../../redux/actions/formula0'
import { toast } from 'react-toastify';


const InputFields = ({
  login,
  isFetching,
}) => {
  const [nationalID, setNationalID] = useState('');

  const checkEnglishDigits = (number) => {
    var regex = new RegExp(`\\d{${number.length}}`);
    if (regex.test(number)) {
      return true;
    } else {
      return false
    }
  }

  const doLogin = () => {
    if (!nationalID) {
      toast.error('کد ملیت رو وارد کن!');
      return;
    }
    if (!checkEnglishDigits(nationalID)) {
      toast.error('لطفاً کد ملیت رو با ارقام انگلیسی وارد کن!');
      return;
    }
    login({ national_id: nationalID });
  }

  return (
    <>
      <Grid item>
        <TextField
          onBlur={(e) => setNationalID(e.target.value)}
          label='کد ملی'
          type='text'
          variant='outlined'
          inputProps={{ className: 'ltr-input' }}
          fullWidth />
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Button
          onClick={doLogin}
          variant='contained'
          color='primary'
          disabled={isFetching}
          fullWidth>
          بزن بریم
      </Button>
      </Grid>
    </>
  )

}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.formula0.isFetching,
})


export default connect(
  mapStateToProps,
  {
    login,
  }
)(InputFields)