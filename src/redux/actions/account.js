import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const createAccount = (national_code, password, phone1) => ({
  [CALL_API]: {
    types: [
      actionTypes.CREATE_ACCOUNT_REQUEST,
      actionTypes.CREATE_ACCOUNT_SUCCESS,
      actionTypes.CREATE_ACCOUNT_FAILURE,
    ],
    url: URLs.CREATE_ACCOUNT,
    fetchOptions: {
      method: 'POST',
      body: {
        national_code,
        password,
        phone1,
      },
    },
  },
});

export const login = (national_code, password) => ({
  [CALL_API]: {
    types: [
      actionTypes.LOGIN_REQUEST,
      actionTypes.LOGIN_SUCCESS,
      actionTypes.LOGIN_FAILURE,
    ],
    url: URLs.LOGIN,
    fetchOptions: {
      method: 'POST',
      body: {
        national_code,
        password,
      },
    },
  },
});


export const logout = () => ({
  [CALL_API]: {
    types: [
      actionTypes.LOGOUT_REQUEST,
      actionTypes.LOGOUT_SUCCESS,
      actionTypes.LOGOUT_FAILURE,
    ],
    url: URLs.LOGOUT,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const doPayment = () => ({
  [CALL_API]: {
    types: [
      actionTypes.PAYMENT_REQUEST,
      actionTypes.PAYMENT_SUCCESS,
      actionTypes.PAYMENT_FAILURE,
    ],
    url: URLs.PAYMENT,
    fetchOptions: {
      method: 'POST',
      body: {
        amount: 100000,
        return_link: 'https://interkarsolar.ir/dashboard?tab=announcements',
      },
    },
  },
});

export const updateUserInfo = ({
  first_name,
  last_name,
  grade, phone2,
  school_name,
  school_phone,
  manager_name,
  manager_phone,
  province,
  city,
}) => ({
  [CALL_API]: {
    types: [
      actionTypes.UPDATE_USER_INFO_REQUEST,
      actionTypes.UPDATE_USER_INFO_SUCCESS,
      actionTypes.UPDATE_USER_INFO_FAILURE,
    ],
    url: URLs.UPDATE_PROFILE,
    payload: {
      first_name,
      last_name,
      grade, phone2,
      school_name,
      school_phone,
      manager_name,
      manager_phone,
      province,
      city,
    },
    fetchOptions: {
      method: 'POST',
      body: {
        first_name,
        last_name,
        grade,
        phone2,
        school_name,
        school_phone,
        manager_name,
        manager_phone,
        city,
      },
    },
  },
});

export const getUserInfo = () => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_USER_INFO_REQUEST,
      actionTypes.GET_USER_INFO_SUCCESS,
      actionTypes.GET_USER_INFO_FAILURE,
    ],
    url: URLs.GET_PROFILE,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const ignorePayment = () => ({
  [CALL_API]: {
    types: [
      actionTypes.PAYMENT_IGNORE_REQUEST,
      actionTypes.PAYMENT_IGNORE_SUCCESS,
      actionTypes.PAYMENT_IGNORE_FAILURE,
    ],
    url: URLs.PAYMENT_IGNORE,
    fetchOptions: {
      method: 'GET',
    },
  },
});

///////////////////////////////////

export const getProvince = () => ({
  [CALL_API]: {
    types: [
      actionTypes.PROVINCE_REQUEST,
      actionTypes.PROVINCE_SUCCESS,
      actionTypes.PROVINCE_FAILURE,
    ],
    url: URLs.PROVINCE,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const getCity = (province) => ({
  [CALL_API]: {
    types: [
      actionTypes.CITY_REQUEST,
      actionTypes.CITY_SUCCESS,
      actionTypes.CITY_FAILURE,
    ],
    url: URLs.CITY,
    fetchOptions: {
      headers: {
        "Province": province,
      },
      method: 'GET',
    },
  },
});

export const getSchool = (city) => ({
  [CALL_API]: {
    types: [
      actionTypes.SCHOOL_REQUEST,
      actionTypes.SCHOOL_SUCCESS,
      actionTypes.SCHOOL_FAILURE,
    ],
    url: URLs.SCHOOL,
    fetchOptions: {
      headers: {
        "City": city,
      },
      method: 'GET',
    },
  },
});