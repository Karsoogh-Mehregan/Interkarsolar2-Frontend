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

export const changePassword = (national_code, new_password, phone1) => ({
  [CALL_API]: {
    types: [
      actionTypes.CHANGE_PASSWORD_REQUEST,
      actionTypes.CHANGE_PASSWORD_SUCCESS,
      actionTypes.CHANGE_PASSWORD_FAILURE,
    ],
    url: URLs.CHANGE_PASSWORD,
    fetchOptions: {
      method: 'POST',
      body: {
        national_code,
        phone1,
        new_password,
      },
    },
  },
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
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

//////////////////////

export const doPayment = ({ amount, exam_id }) => ({
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
        amount,
        exam_id,
        return_link: 'https://interkarsolar.ir/dashboard?tab=exam',
      },
    },
  },
});

export const checkPaymentStatus = () => ({
  [CALL_API]: {
    types: [
      actionTypes.CHECK_PAYMENT_STATUS_REQUEST,
      actionTypes.CHECK_PAYMENT_STATUS_SUCCESS,
      actionTypes.CHECK_PAYMENT_STATUS_FAILURE,
    ],
    url: URLs.PAYMENT_STATUS,
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

export const getProvinceDetails = (id) => ({
  [CALL_API]: {
    types: [
      actionTypes.PROVINCE_DETAILS_REQUEST,
      actionTypes.PROVINCE_DETAILS_SUCCESS,
      actionTypes.PROVINCE_DETAILS_FAILURE,
    ],
    url: URLs.PROVINCE_DETAILS,
    fetchOptions: {
      headers: {
        province: id,
      },
      method: 'GET',
    },
  },
});

export const getCityDetails = (id) => ({
  [CALL_API]: {
    types: [
      actionTypes.CITY_DETAILS_REQUEST,
      actionTypes.CITY_DETAILS_SUCCESS,
      actionTypes.CITY_DETAILS_FAILURE,
    ],
    url: URLs.CITY_DETAILS,
    fetchOptions: {
      headers: {
        city: id,
      },
      method: 'GET',
    },
  },
});

export const getProvinces = () => ({
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

export const getCity = (provinceID) => ({
  [CALL_API]: {
    types: [
      actionTypes.CITY_REQUEST,
      actionTypes.CITY_SUCCESS,
      actionTypes.CITY_FAILURE,
    ],
    url: URLs.CITY,
    fetchOptions: {
      headers: {
        "Province": provinceID,
      },
      method: 'GET',
    },
  },
});

export const getSchool = (cityID) => ({
  [CALL_API]: {
    types: [
      actionTypes.SCHOOL_REQUEST,
      actionTypes.SCHOOL_SUCCESS,
      actionTypes.SCHOOL_FAILURE,
    ],
    url: URLs.SCHOOL,
    fetchOptions: {
      headers: {
        "City": cityID,
      },
      method: 'GET',
    },
  },
});