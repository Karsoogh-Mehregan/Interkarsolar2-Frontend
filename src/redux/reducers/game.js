import * as actionTypes from '../actionTypes';

const initState = {
  allSubjects: [],
  singleProblems: [],
  multipleProblems: [],
  isFetching: false,
};

function index(state = initState, action) {
  switch (action.type) {

    case actionTypes.GET_ALL_SINGLE_PROBLEMS_REQUEST:
    case actionTypes.GET_ALL_MULTIPLE_PROBLEMS_REQUEST:
    case actionTypes.GET_RANDOM_SINGLE_PROBLEM_REQUEST:
    case actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_REQUEST:
    case actionTypes.GET_ALL_SUBJECTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.GET_ALL_SINGLE_PROBLEMS_FAILURE:
    case actionTypes.GET_ALL_MULTIPLE_PROBLEMS_FAILURE:
    case actionTypes.GET_ALL_SUBJECTS_FAILURE:
      return {
        ...state,
        // todo
        isFetching: false,
      }

    case actionTypes.GET_ALL_SUBJECTS_SUCCESS:
      return {
        ...state,
        allSubjects: action.response,
        isFetching: false,
      }


    case actionTypes.GET_ALL_SINGLE_PROBLEMS_SUCCESS:
      return {
        ...state,
        singleProblems: action.response,
        isFetching: false,
      }

    case actionTypes.GET_ALL_MULTIPLE_PROBLEMS_SUCCESS:
      return {
        ...state,
        multipleProblems: action.response,
        isFetching: false,
      }

    default:
      return state;
  }
}

export default index;

export const GET_ALL_PLAYER_PROBLEMS_REQUEST = 'GET_ALL_PLAYER_PROBLEMS_REQUEST';
export const GET_ALL_PLAYER_PROBLEMS_SUCCESS = 'GET_ALL_PLAYER_PROBLEMS_SUCCESS';
export const GET_ALL_PLAYER_PROBLEMS_FAILURE = 'GET_ALL_PLAYER_PROBLEMS_FAILURE';

export const GET_ALL_SUBJECTS_REQUEST = 'GET_ALL_SUBJECTS_REQUEST';
export const GET_ALL_SUBJECTS_SUCCESS = 'GET_ALL_SUBJECTS_SUCCESS';
export const GET_ALL_SUBJECTS_FAILURE = 'GET_ALL_SUBJECTS_FAILURE';

export const GET_ONE_PROBLEM_REQUEST = 'GET_ONE_PROBLEM_REQUEST';
export const GET_ONE_PROBLEM_SUCCESS = 'GET_ONE_PROBLEM_SUCCESS';
export const GET_ONE_PROBLEM_FAILURE = 'GET_ONE_PROBLEM_FAILURE';
