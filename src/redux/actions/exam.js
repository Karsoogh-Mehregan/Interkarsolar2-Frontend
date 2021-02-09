import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const getExam = ({ }) => ({
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
      },
    },
  },
});


export const sendFileAnswer = ({ }) => ({
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
      },
    },
  },
});
