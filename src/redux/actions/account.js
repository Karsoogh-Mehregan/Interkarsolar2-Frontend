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
  type: actionTypes.LOGOUT,
});

export const doPayment = (amount = '1000', return_link) => ({
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
        return_link,
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
