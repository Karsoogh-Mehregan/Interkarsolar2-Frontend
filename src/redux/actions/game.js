import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as urls from './urls';

export const getAllPlayerProblems = () => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ALL_PLAYER_PROBLEMS_REQUEST,
      actionTypes.GET_ALL_PLAYER_PROBLEMS_SUCCESS,
      actionTypes.GET_ALL_PLAYER_PROBLEMS_FAILURE,
    ],
    url: urls.PLAYER_PROBLEMS,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const getAllSubjects = () => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ALL_SUBJECTS_REQUEST,
      actionTypes.GET_ALL_SUBJECTS_SUCCESS,
      actionTypes.GET_ALL_SUBJECTS_FAILURE,
    ],
    url: urls.SUBJECTS,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const getOneProblem = ({ type, difficulty, subject }) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ALL_SUBJECTS_REQUEST,
      actionTypes.GET_ALL_SUBJECTS_SUCCESS,
      actionTypes.GET_ALL_SUBJECTS_FAILURE,
    ],
    url: urls.ONE_PROBLEM,
    fetchOptions: {
      method: 'GET',
      body: { type, difficulty, subject }
    },
  },
});

