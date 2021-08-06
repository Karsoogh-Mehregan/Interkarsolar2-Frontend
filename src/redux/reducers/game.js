import * as actionTypes from '../actionTypes';

const initState = {
  allSubjects: [],
  singleProblems: [],
  multipleProblems: [],
  hints: [],
  hint: {},
  getPlayerSingleProblem: {},
  isFetching: false,
};

function index(state = initState, action) {
  switch (action.type) {

    case actionTypes.SUBMIT_NEW_HINT_REQUEST:
    case actionTypes.SUBMIT_MULTIPLE_PROBLEM_ANSWER_REQUEST:
    case actionTypes.SUBMIT_SINGLE_PROBLEM_ANSWER_REQUEST:
    case actionTypes.GET_PLAYER_INFO_REQUEST:
    case actionTypes.GET_SPECIFIC_SINGLE_PROBLEM_REQUEST:
    case actionTypes.GET_SPECIFIC_MULTIPLE_PROBLEM_REQUEST:
    case actionTypes.GET_ALL_SINGLE_PROBLEMS_REQUEST:
    case actionTypes.GET_ALL_MULTIPLE_PROBLEMS_REQUEST:
    case actionTypes.GET_RANDOM_SINGLE_PROBLEM_REQUEST:
    case actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_REQUEST:
    case actionTypes.GET_ALL_SUBJECTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.SUBMIT_NEW_HINT_FAILURE:
    case actionTypes.SUBMIT_MULTIPLE_PROBLEM_ANSWER_FAILURE:
    case actionTypes.SUBMIT_SINGLE_PROBLEM_ANSWER_FAILURE:
    case actionTypes.GET_PLAYER_INFO_FAILURE:
    case actionTypes.GET_SPECIFIC_SINGLE_PROBLEM_FAILURE:
    case actionTypes.GET_SPECIFIC_MULTIPLE_PROBLEM_FAILURE:
    case actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_FAILURE:
    case actionTypes.GET_RANDOM_SINGLE_PROBLEM_FAILURE:
    case actionTypes.GET_ALL_SINGLE_PROBLEMS_FAILURE:
    case actionTypes.GET_ALL_MULTIPLE_PROBLEMS_FAILURE:
    case actionTypes.GET_ALL_SUBJECTS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.GET_PROBLEM_HINTS_SUCCESS:
      return {
        ...state,
        hints: action.response,
        isFetching: false,
      }

    case actionTypes.GET_PLAYER_INFO_SUCCESS:
      return {
        ...state,
        player: action.response,
        isFetching: false,
      }


    case actionTypes.PLAYER_SINGLE_PROBLEM_FOR_CORRECTION_SUCCESS:
      return {
        ...state,
        playerSingleProblem: action.response,
        isFetching: false,
      }


    case actionTypes.GET_HINT_SUCCESS:
      return {
        ...state,
        hint: action.response,
        isFetching: false,
      }

    case actionTypes.SUBMIT_NEW_HINT_SUCCESS:
    case actionTypes.SUBMIT_MULTIPLE_PROBLEM_ANSWER_SUCCESS:
    case actionTypes.SUBMIT_SINGLE_PROBLEM_ANSWER_SUCCESS:
    case actionTypes.GET_RANDOM_SINGLE_PROBLEM_SUCCESS:
    case actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_SUCCESS:
      setTimeout(() => {
        window.location.reload();
      }, 4000)
      return {
        ...state,
        isFetching: false,
      }


    case actionTypes.ANSWER_HINT_SUCCESS:
    case actionTypes.CORRECT_ANSWER_SUCCESS:
      window.location.reload();
      return {
        ...state,
        isFetching: false,
      }


    case actionTypes.GET_SPECIFIC_SINGLE_PROBLEM_SUCCESS:
      return {
        ...state,
        singleProblem: action.response,
        isFetching: false,
      }

    case actionTypes.GET_SPECIFIC_MULTIPLE_PROBLEM_SUCCESS:
      return {
        ...state,
        multipleProblem: action.response,
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
