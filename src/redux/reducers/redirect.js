import * as actionTypes from '../actionTypes';

const initState = {
  redirectTo: null,
  force: false,
};

function redirect(state = initState, action) {
  switch (action.type) {
    case actionTypes.REDIRECT:
      return { redirectTo: action.payload };
    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return { redirectTo: '/dashboard' }
    case actionTypes.INIT_REDIRECT:
      return initState;
    default:
      return state;
  }
}

export default redirect;
