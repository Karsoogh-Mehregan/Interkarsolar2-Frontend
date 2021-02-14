import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Hidden,
} from '@material-ui/core';
import { connect } from 'react-redux';
import {
  updateUserInfo,
  getProvince,
  getCity,
  getSchool,
} from '../../redux/actions/account'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    width: '100wh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  formImage: {
    height: '40vh',
    background: `url(${process.env.PUBLIC_URL + '/form.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  title: {
    fontSize: 60,
    color: '#fbebd1',
    textShadow: '-2px 2px #888',
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
    },
  },
  header3: {
    fontSize: 25,
    lineHeight: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    textJustify: 'inter-character',
    color: '#fbebd1',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'rgb(255, 255, 255, 0.94)',
  },
  dropDown: {
    minWidth: '100px',
  },
  formControl: {
    width: '100%'
  },
  textAlign: 'justify',
  color: '#fbebd1',
}))

const ProfileTab = ({
  provinces,
  cities,
  schools,
  oldInfo,
  isFetching,
  updateUserInfo,
  getProvince,
  getCity,
  getSchool,
  isRegistrationCompleted,
}) => {
  const classes = useStyles();
  const [info, setInfo] = useState('');

  const onChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })
  }

  const saveUpdates = () => {
    const { first_name, last_name, national_code, phone1, phone2, grade, city, school_name } = info;
    if (isRegistrationCompleted && !(first_name && last_name && national_code && phone1 && phone2 && grade && city && school_name)) {
      toast.error('همه‌ی مشخصات اجباری رو باید تکمیل کنی! اجباری‌ها با علامت ستاره کنار اسمشون مشخص شدند.')
      return;
    }

    var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
    if (info.phone2 && !regex.test(info.phone2)) {
      toast.error('شماره موبایل زاپاسی که وارد کردی نامعتبره!')
      return;
    }

    if (info.manager_phone && !regex.test(info.manager_phone)) {
      toast.error('شماره موبایل مدیر مدرسه‌ات نامعتبره!')
      return;
    }

    regex = new RegExp('^(0)?\\d{10}$');
    if (info.school_phone && !regex.test(info.school_phone)) {
      toast.error('شماره تلفن مدرسه‌ات نامعتبره!')
      return;
    }

    updateUserInfo(info);
  }

  useEffect(
    () => {
      setInfo(oldInfo)
    }, [oldInfo])

  useEffect(
    () => {
      getProvince();
    }, [getProvince])

  useEffect(
    () => {
      if (info.province) {
        getCity(info.province);
      }
    }, [info.province, getCity])


  if (!info) {
    return (
      <Container style={{ overflow: 'hidden' }}>
        <div className={`dashboard-background blur`} />
        loading...
      </Container >
    )
  }

  return (
    <Container style={{ overflow: 'hidden' }}>
      <div className={`dashboard-background blur`} />
      <Grid
        className={classes.root}
        container
        justify='center'
        alignItems='center'
        spacing={4}
      >
        <Grid item xs={12}>
          <Typography variant='h2' className={classes.title} align='center'>
            مشخصات من
          </Typography>
        </Grid>
        <Grid item container justify='space-evenly' alignItems='center' spacing={4} xs={12}>
          <Grid item container xs={12} md={8} direction='column' justify='center' alignItems='center' spacing={4}>
            <Grid
              item container
              justify='center'
              alignItem='center'
              spacing={2}>
              <Paper className={classes.paper}>
                <Grid item container spacing={1} justify='center' alignItems='center'>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='first_name' label='نام' value={info.first_name} variant='outlined' required onChange={onChange} fullWidth />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='last_name' label='نام خانوادگی' value={info.last_name} variant='outlined' required onChange={onChange} fullWidth />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='national_code' label='کد ملی' value={info.national_code} disabled variant='outlined' required onChange={onChange} fullWidth />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item container xs={12} sm={3} justify='center' />
                  </Hidden>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='phone1' label='شماره موبایل' value={info.phone1} disabled variant='outlined' required onChange={onChange} fullWidth />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item container xs={12} sm={3} justify='center' />
                  </Hidden>
                  <Grid item container xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl} required>
                      <InputLabel id="demo-simple-select-required-label">پایه</InputLabel>
                      <Select
                        className={classes.dropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={info.grade}
                        onChange={onChange}
                        name='grade'
                        label='پایه'
                        required
                      >
                        <MenuItem value={'7'}>هفتم</MenuItem>
                        <MenuItem value={'8'}>هشتم</MenuItem>
                        <MenuItem value={'9'}>نهم</MenuItem>
                        <MenuItem value={'10'}>هیچ‌کدام</MenuItem>
                      </Select>
                    </FormControl >
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='phone2' label='شماره موبایل زاپاس' value={info.phone2} required variant='outlined' onChange={onChange} fullWidth />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item container
              justify='center'
              alignItem='center'
              spacing={2}>
              <Paper className={classes.paper}>
                <Grid item container spacing={1} justify='center' alignItems='center'>
                  <Grid item container xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl} required>
                      <InputLabel id="demo-simple-select-required-label">استان</InputLabel>
                      <Select
                        className={classes.dropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={info.province}
                        onChange={onChange}
                        name='province'
                        label='استان'
                      >
                        {
                          provinces.map((province) => (
                            <MenuItem value={province.id}>{province.title}</MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl >
                  </Grid>
                  <Grid item container xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl} required>
                      <InputLabel id="demo-simple-select-required-label">شهر</InputLabel>
                      <Select
                        className={classes.dropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={info.city}
                        onChange={onChange}
                        disabled={!info.province}
                        name='city'
                        label='شهر'
                      >
                        {
                          cities.map((city) => (
                            <MenuItem value={city.id}>{city.title}</MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl >
                  </Grid>
                  <Hidden xsDown>
                    <Grid item container xs={12} sm={3} justify='center' />
                  </Hidden>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField
                      label='مدرسه' name='school_name' value={info.school_name} required variant='outlined' onChange={onChange} fullWidth />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item container xs={12} sm={3} justify='center' />
                  </Hidden>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField
                      label='شماره تلفن مدرسه' name='school_phone' value={info.school_phone} variant='outlined' placeholder='مثال: 03112345678' onChange={onChange} fullWidth />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField label='نام مدیر' name='manager_name' value={info.manager_name} variant='outlined' onChange={onChange} fullWidth />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField label='شماره موبایل مدیر' name='manager_phone' value={info.manager_phone} variant='outlined' onChange={onChange} fullWidth />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item container md={3} className={classes.formImage} />
          </Hidden>
          <Grid item container xs={12} sm={4} justify='center'>
            <Button disabled={isFetching} size='large' variant='contained' color='primary' fullWidth onClick={saveUpdates}>
              ذخیره تغییرات
            </Button>
          </Grid>
        </Grid>
      </Grid >
    </Container >
  )
}

const mapStateToProps = (state, ownProps) => ({
  oldInfo: state.account.info,
  isFetching: state.account.isFetching,
  provinces: state.account.provinces
    ? state.account.provinces
    : [],
  cities: state.account.cities
    ? state.account.cities
    : [],
  schools: state.account.schools
    ? state.account.schools
    : [],
  isRegistrationCompleted: ownProps.isRegistrationCompleted,
})

export default connect(
  mapStateToProps,
  {
    getProvince,
    getCity,
    getSchool,
    updateUserInfo,
  }
)(ProfileTab);