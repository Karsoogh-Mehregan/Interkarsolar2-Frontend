import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import {
  login,
} from '../../redux/actions/account'
import { toast } from 'react-toastify';

const InputFields = ({
  login,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doCreateAccount = () => {
    if (!username || !password) {
      toast.error('لطفاً همه‌ی چیزهایی که ازت خواسته شده رو پر کن!')
      return;
    }
    login(username, password);
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
    login,
  }
)(InputFields)