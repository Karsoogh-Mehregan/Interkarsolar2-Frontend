import * as actionTypes from '../actionTypes';

const initState = {
  isFetching: false,
};

function index(state = initState, action) {
  switch (action.type) {

    case actionTypes.PROBLEM_REQUEST:
    case actionTypes.PROBLEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.PROBLEM_FAILURE:
    case actionTypes.PROBLEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.PROBLEMS_SUCCESS:
      return {
        ...state,
        problems: action.response.data,
        isFetching: false,
      }

    case actionTypes.PROBLEM_SUCCESS:
      return {
        ...state,
        problem: {
          ...action.response.data,
        },
        isFetching: false,
      }

    default:
      return state;
  }
}

export default index;
