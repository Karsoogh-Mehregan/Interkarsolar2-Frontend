import * as actionTypes from '../actionTypes';

const initState = {
  redirectTo: null,
};

function redirect(state = initState, action) {
  switch (action.type) {
    case actionTypes.REDIRECT:
      return { redirectTo: action.payload };

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return { redirectTo: '/dashboard?tab=announcements' }

    case actionTypes.LOGIN_SUCCESS:
      return { redirectTo: '/dashboard?tab=announcements' }

    case actionTypes.LOGOUT:
      return { redirectTo: '/' }

    case actionTypes.INIT_REDIRECT:
      return initState;
    default:
      return state;
  }
}

export default redirect;
