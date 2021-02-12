import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify'

const initState = {
  redirectTo: null,
  force: false,
};

function redirect(state = initState, action) {
  switch (action.type) {
    case actionTypes.REDIRECT:
      return { redirectTo: action.payload };

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      toast.error("DDFDRFGFDSERTGHGB")
      return { redirectTo: '/dashboard?tab=announcements' }

    case actionTypes.LOGIN_SUCCESS:
      return { redirectTo: '/dashboard?tab=announcements' }

    case actionTypes.PAYMENT_SUCCESS:
      console.log(action.response);
      window.location.replace(action.response.data.pay_link)
      return { ...state }

    case actionTypes.INIT_REDIRECT:
      return initState;
    default:
      return state;
  }
}

export default redirect;
