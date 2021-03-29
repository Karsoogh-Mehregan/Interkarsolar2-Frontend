import jsonToFormData from '../../utils/jsonToFromDate';
import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const getAnswerForCorrection = ({ ans_id }) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ANSWER_FOR_CORRECTION_REQUEST,
      actionTypes.GET_ANSWER_FOR_CORRECTION_SUCCESS,
      actionTypes.GET_ANSWER_FOR_CORRECTION_FAILURE,
    ],
    url: URLs.GET_ANSWER_FOR_CORRECTION,
    fetchOptions: {
      method: 'POST',
      body: {
        ans_id,
      },
    },
  },
});

export const setAnswerScore = ({ ans_id, score }) => ({
  [CALL_API]: {
    types: [
      actionTypes.SET_ANSWER_SCORE_REQUEST,
      actionTypes.SET_ANSWER_SCORE_SUCCESS,
      actionTypes.SET_ANSWER_SCORE_FAILURE,
    ],
    url: URLs.SET_ANSWER_SCORE,
    fetchOptions: {
      method: 'POST',
      body: {
        ans_id,
        score,
      },
    },
  },
});
