import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { createAccount } from '../../redux/actions/account'
import { redirect } from '../../redux/actions/redirect'

import { toast } from 'react-toastify';

const InputFields = ({
  createAccount,
  isFetching,
}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const checkForEnglishDigits = (number) => {
    var regex = new RegExp(`\\d{${number.length}}`);
    if (regex.test(number)) {
      return number;
    } else {
      return 'error'
    }
  }

  const doCreateAccount = () => {
    if (!username || !password || !confirmPassword || !phoneNumber) {
      toast.error('لطفاً همه‌ی چیزهایی که ازت خواسته شده رو پر کن!')
      return;
    }
    if (password !== confirmPassword) {
      toast.error('رمزهایی که وارد کردی مشابه هم نیستند!')
      return;
    }
    var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
    if (!regex.test(phoneNumber)) {
      toast.error('شماره موبایلی که وارد کردی نامعتبره!')
      return;
    }

    console.log(phoneNumber)
    createAccount({ username, password, phoneNumber });
  }

  return (
    <>
      <Grid item>
        <TextField
          onChange={
            (e) => {
              if (checkForEnglishDigits(e.target.value) !== 'error') {
                setUsername(checkForEnglishDigits(e.target.value))
              }
            }
          }
          label='کد ملی'
          helperText='یادت باشه فقط از ارقام انگلیسی استفاده کنی!'
          value={username}
          type='text'
          inputProps={{ className: 'ltr-input' }}
          variant='outlined'
          fullWidth />
      </Grid>
      <Grid item>
        <TextField
          onChange={
            (e) => {
              if (checkForEnglishDigits(e.target.value) !== 'error') {
                setPhoneNumber(checkForEnglishDigits(e.target.value))
              }
            }
          }
          value={phoneNumber}
          label='شماره موبایل'
          type='tel'
          helperText='این‌جا هم همینطور، فقط رقم انگلیسی به کار ببر.'
          inputProps={{ className: 'ltr-input' }}
          variant='outlined'
          fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          onBlur={(e) => setPassword(e.target.value)}
          label='رمز عبور'
          variant='outlined'
          type='password'
          inputProps={{ className: 'ltr-input' }}
          fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          onBlur={(e) => setConfirmPassword(e.target.value)}
          label='تکرار رمز عبور'
          type='password'
          variant='outlined'
          inputProps={{ className: 'ltr-input' }}
          fullWidth>
        </TextField>
      </Grid>
      <Grid item container justify='center'>
        <Typography align='center'>
          {'اگه قبلاً سفینه‌ت رو ساختی از '}
          <a href='/login'>
            {'این‌جا'}
          </a>
          {' واردش شو!'}
        </Typography>
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Button
          onClick={doCreateAccount}
          variant='contained'
          color='secondary'
          disabled={isFetching}
          fullWidth>
          {'ثبت'}
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