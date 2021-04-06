import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const teamLogin = ({ national_id }) => ({
  [CALL_API]: {
    types: [
      actionTypes.TEAM_LOGIN_REQUEST,
      actionTypes.TEAM_LOGIN_SUCCESS,
      actionTypes.TEAM_LOGIN_FAILURE,
    ],
    url: URLs.TEAM_LOGIN,
    fetchOptions: {
      method: 'POST',
      body: {
        national_id
      },
    },
  },
});

export const getTeamData = ({ team_id }) => ({
  [CALL_API]: {
    types: [
      actionTypes.TEAM_DATA_REQUEST,
      actionTypes.TEAM_DATA_SUCCESS,
      actionTypes.TEAM_DATA_FAILURE,
    ],
    url: URLs.GET_TEAM_DATA,
    fetchOptions: {
      method: 'POST',
      body: {
        team_id
      },
    },
  },
});

export const getProblems = ({ team_id, status }) => ({
  [CALL_API]: {
    types: [
      actionTypes.PROBLEMS_REQUEST,
      actionTypes.PROBLEMS_SUCCESS,
      actionTypes.PROBLEMS_FAILURE,
    ],
    url: URLs.GET_PROBLEMS,
    fetchOptions: {
      method: 'POST',
      body: {
        team_id,
        status,
      },
    },
  },
});

export const getProblem = ({ team_id, id }) => ({
  [CALL_API]: {
    types: [
      actionTypes.PROBLEM_REQUEST,
      actionTypes.PROBLEM_SUCCESS,
      actionTypes.PROBLEM_FAILURE,
    ],
    url: `${URLs.GET_PROBLEM}${id}/`,
    fetchOptions: {
      method: 'POST',
      body: {
        team_id,
      },
    },
  },
});