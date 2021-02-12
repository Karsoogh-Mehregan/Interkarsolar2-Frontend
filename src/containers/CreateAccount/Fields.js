import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { createAccount } from '../../redux/actions/account'
import { redirect } from '../../redux/actions/redirect'

import { toast } from 'react-toastify';

const InputFields = ({
  createAccount,
  isFetching,
}) => {
  const [nationalID, setNationalID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const doCreateAccount = () => {
    if (!nationalID || !password || !confirmPassword || !phoneNumber) {
      toast.error('لطفاً همه‌ی چیزهایی که ازت خواسته شده رو پر کن!')
      return;
    }
    if (password !== confirmPassword) {
      toast.error('رمزهایی که وارد کردی مشابه هم نیستند!')
      return;
    }
    var regex = new RegExp('\\d+');
    if (!regex.test(nationalID)) {
      toast.error('کد ملی نامعتبره!')
      return;
    }
    regex = new RegExp('^(\\+98|0)?9\\d{9}$');
    if (!regex.test(phoneNumber)) {
      toast.error('شماره موبایلی که وارد کردی نامعتبره!')
      return;
    }
    createAccount(nationalID, password, phoneNumber);
  }

  return (
    <>
      <Grid item>
        <TextField
          onChange={(e) => setNationalID(e.target.value)}
          label='کد ملی'
          type='text'
          variant='outlined'
          fullWidth />
      </Grid>
      <Grid item>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label='رمز عبور'
          variant='outlined'
          type='password'
          fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          onChange={(e) => setConfirmPassword(e.target.value)}
          label='تکرار رمز عبور'
          type='password'
          variant='outlined'
          fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          onChange={(e) => setPhoneNumber(e.target.value)}
          label='شماره موبایل'
          type='tel'
          helperText='یادت باشه شماره موبایلت رو فقط با ارقام انگلیسی وارد کنی!'
          variant='outlined'
          fullWidth>
        </TextField>
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Button
          onClick={doCreateAccount}
          variant='contained'
          color='primary'
          disabled={isFetching}
          fullWidth>
          ثبت
        </Button>
      </Grid>
    </>
  )
}


const mapStateToProps = (state, ownProps) => ({
  isFetching: state.account.isFetching,
})

export default connect(
  mapStateToProps,
  {
    createAccount,
    redirect,
  }
)(InputFields)