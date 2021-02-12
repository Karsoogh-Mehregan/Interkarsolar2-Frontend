import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initState = {
  token: '',
  uid: '',
  isFetching: false,
};

function account(state = initState, action) {
  switch (action.type) {

    case actionTypes.PAYMENT_REQUEST:
    case actionTypes.CREATE_ACCOUNT_REQUEST:
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.response.access,
        user: action.response.user_info,
      };

    case actionTypes.PAYMENT_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case actionTypes.PAYMENT_SUCCESS:
      window.location.replace(action.response.data.pay_link)
      return {
        ...state,
        isFetching: false,
      }


    case actionTypes.LOGOUT:
      return initState;

    default:
      return state;
  }
}

export default account;
