import * as actionTypes from '../actionTypes';

const initState = {
  redirectTo: null,
};

function redirect(state = initState, action) {
  switch (action.type) {
    case actionTypes.REDIRECT:
      return { redirectTo: action.payload };

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return { redirectTo: '/login' }

    case actionTypes.LOGIN_SUCCESS:
      return { redirectTo: '/after_login' }

    case actionTypes.LOGOUT:
      return { redirectTo: '/' }

    case actionTypes.PAYMENT_IGNORE_SUCCESS:
      return { redirectTo: '/dashboard?tab=announcements' }

    case actionTypes.EXAM_REGISTER_SUCCESS:
      return { redirectTo: '/dashboard?tab=exam' }

    // formula0
    case actionTypes.TEAM_LOGIN_SUCCESS:
      return { redirectTo: '/formula0/my_problems' }

    case actionTypes.INIT_REDIRECT:
      return initState;
    default:
      return state;
  }
}

export default redirect;
