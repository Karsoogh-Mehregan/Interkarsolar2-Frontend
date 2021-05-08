import * as actionTypes from '../actionTypes';

const initState = {
  isFetching: false,
};

function mentor(state = initState, action) {
  switch (action.type) {

    case actionTypes.GET_ANSWER_FOR_CORRECTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.GET_ANSWER_FOR_CORRECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.GET_ANSWER_FOR_CORRECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    default:
      return state;
  }
}

export default mentor;
