import * as actionTypes from '../actionTypes';

const initState = {
  isFetching: false,
};

function index(state = initState, action) {
  switch (action.type) {

    case actionTypes.TEAM_LOGIN_REQUEST:
    case actionTypes.GET_PROBLEM_REQUEST:
    case actionTypes.GET_PROBLEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.LOGOUT:
      return initState;

    case actionTypes.TEAM_LOGIN_FAILURE:
    case actionTypes.GET_PROBLEM_FAILURE:
    case actionTypes.GET_PROBLEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.TEAM_LOGIN_SUCCESS:
      console.log(action)
      return {
        ...state,
        team_id: action.data.team_id,
        isFetching: false,
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
