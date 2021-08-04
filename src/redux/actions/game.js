import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as urls from './urls';

export const getAllSingleProblems = ({ gameId }) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ALL_SINGLE_PROBLEMS_REQUEST,
      actionTypes.GET_ALL_SINGLE_PROBLEMS_SUCCESS,
      actionTypes.GET_ALL_SINGLE_PROBLEMS_FAILURE,
    ],
    url: urls.ALL_SINGLE_PROBLEMS,
    fetchOptions: {
      method: 'POST',
      body: {
        game_id: gameId
      }
    },
  },
});


export const getAllMultipleProblems = ({ gameId }) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ALL_MULTIPLE_PROBLEMS_REQUEST,
      actionTypes.GET_ALL_MULTIPLE_PROBLEMS_SUCCESS,
      actionTypes.GET_ALL_MULTIPLE_PROBLEMS_FAILURE,
    ],
    url: urls.ALL_MULTIPLE_PROBLEMS,
    fetchOptions: {
      method: 'POST',
      body: {
        game_id: gameId
      }
    },
  },
});

export const getAllSubjects = ({ gameId }) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ALL_SUBJECTS_REQUEST,
      actionTypes.GET_ALL_SUBJECTS_SUCCESS,
      actionTypes.GET_ALL_SUBJECTS_FAILURE,
    ],
    url: urls.SUBJECTS,
    fetchOptions: {
      method: 'POST',
      body: {
        game_id: gameId
      }
    },
  },
});

export const getRandomSingleProblem = ({ type, difficulty, subject }) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_RANDOM_SINGLE_PROBLEM_REQUEST,
      actionTypes.GET_RANDOM_SINGLE_PROBLEM_SUCCESS,
      actionTypes.GET_RANDOM_SINGLE_PROBLEM_FAILURE,
    ],
    url: urls.RANDOM_SINGLE_PROBLEMS,
    fetchOptions: {
      method: 'POST',
      body: { type, difficulty, subject }
    },
  },
});

export const getRandomMultipleProblem = () => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_REQUEST,
      actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_FAILURE,
      actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_SUCCESS,
    ],
    url: urls.RANDOM_MULTIPLE_PROBLEMS,
    fetchOptions: {
      method: 'POST',
    },
  },
});


