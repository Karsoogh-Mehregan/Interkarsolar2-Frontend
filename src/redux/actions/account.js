import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const createAccount = ({ username, phone, password }) => ({
  [CALL_API]: {
    types: [
      actionTypes.CREATE_ACCOUNT_REQUEST,
      actionTypes.CREATE_ACCOUNT_SUCCESS,
      actionTypes.CREATE_ACCOUNT_FAILURE,
    ],
    url: URLs.CREATE_ACCOUNT,
    fetchOptions: {
      method: 'POST',
      body: ({
        username,
        password,
        phone,
      }),
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
      body: ({
        username,
        password,
        phone,
      }),
    },
  },
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});


export const payment = ({ username, phone, password }) => ({
  [CALL_API]: {
    types: [
      actionTypes.PAYMENT_REQUEST,
      actionTypes.PAYMENT_SUCCESS,
      actionTypes.PAYMENT_FAILURE,
    ],
    url: URLs.PAYMENT,
    fetchOptions: {
      method: 'POST',
      body: ({
        username,
        password,
        phone,
      }),
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
      body: ({
        username,
        password,
        phone,
      }),
    },
  },
});
