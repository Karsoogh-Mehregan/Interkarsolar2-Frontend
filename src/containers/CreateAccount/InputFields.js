import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import {
  createAccount,
} from '../../redux/actions/account'

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
    // backgroundColor: '#984fff', // TODO:
  },
  statImage: {
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/interlogo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}))

const InputFields = ({
  createAccount,
}) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confitmPassword, setConfirmPassword] = useState('');

  const doCreateAccount = (username, password, phone) => {
    // validation
    createAccount(username, password, phone);
  }

  return (
    <>
      <Grid item>
        <TextField onChange={(e) => setUsername(e.target.value)} placeholder='نام کاربری' variant='outlined' fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField onChange={(e) => setUsername(e.target.value)} placeholder='رمز عبور' variant='outlined' fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField onChange={(e) => setUsername(e.target.value)} placeholder='تایید رمز عبور' variant='outlined' fullWidth>
        </TextField>
      </Grid>
      <Grid item>
        <TextField onChange={(e) => setUsername(e.target.value)} placeholder='شماره موبایل' variant='outlined' fullWidth>
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