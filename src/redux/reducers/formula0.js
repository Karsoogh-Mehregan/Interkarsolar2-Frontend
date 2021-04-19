import * as actionTypes from '../actionTypes';

const initState = {
  isFetching: false,
};

function index(state = initState, action) {
  switch (action.type) {

    case actionTypes.REQUEST_PROBLEM_REQUEST:
    case actionTypes.TEAM_DATA_REQUEST:
    case actionTypes.TEAM_LOGIN_REQUEST:
    case actionTypes.GET_PROBLEM_REQUEST:
    case actionTypes.GET_PROBLEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.REQUEST_PROBLEM_FAILURE:
    case actionTypes.TEAM_DATA_FAILURE:
    case actionTypes.TEAM_LOGIN_FAILURE:
    case actionTypes.GET_PROBLEM_FAILURE:
    case actionTypes.GET_PROBLEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.TEAM_DATA_SUCCESS:
      return {
        ...state,
        team: {
          ...action.data,
        }
      }

    case actionTypes.GET_PROBLEMS_SUCCESS:
      return {
        ...state,
        problems: action.data,
        isFetching: false,
      }

    case actionTypes.GET_PROBLEM_SUCCESS:
      return {
        ...state,
        problem: {
          ...action.data,
        },
        isFetching: false,
      }

    default:
      return state;
  }
}

export default index;
