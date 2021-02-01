import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import {
  createAccount,
} from '../../redux/actions/account'
import { toast } from 'react-toastify';

const InputFields = ({
  createAccount,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
      toast.error('شماره تلفنی که وارد کردی اشتباهه!')
      return;
    }
    createAccount(username, password, phoneNumber);
  }

  return (
    <>
      <Grid item>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label='نام کاربری'
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
          helperText='یادت باشه شماره تلفنت رو فقط با ارقام انگلیسی وارد کنی!'
          variant='outlined'
          fullWidth>
        </TextField>
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Button onClick={doCreateAccount} variant='contained' color='primary' fullWidth>
          بزن بریم
      </Button>
      </Grid>
    </>
  )

}


export default connect(
  undefined,
  {
    createAccount,
  }
)(InputFields)