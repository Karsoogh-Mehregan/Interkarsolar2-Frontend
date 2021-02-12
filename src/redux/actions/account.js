import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const createAccount = (national_code, phone1, password) => ({
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

export const login = ({ username, phone, password }) => ({
  [CALL_API]: {
    types: [
      actionTypes.LOGIN_REQUEST,
      actionTypes.LOGIN_SUCCESS,
      actionTypes.LOGIN_FAILURE,
    ],
    url: URLs.CREATE_ACCOUNT,
    fetchOptions: {
      method: 'POST',
      body: {
        username,
        password,
        phone,
      },
    },
  },
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});


export const doPayment = ({ uid = 1, amount = '1000' }) => ({
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
        uid,
        amount,
      },
    },
  },
});

export const updateUserInfo = ({ username, phone, password }) => ({
  [CALL_API]: {
    types: [
      actionTypes.UPDATE_USER_INFO_REQUEST,
      actionTypes.UPDATE_USER_INFO_SUCCESS,
      actionTypes.UPDATE_USER_INFO_FAILURE,
    ],
    url: URLs.PAYMENT,
    fetchOptions: {
      method: 'POST',
      body: {
        username,
        password,
        phone,
      },
    },
  },
});
