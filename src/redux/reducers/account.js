import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initState = {
  token: '',
  isFetching: false,
};

function account(state = initState, action) {
  switch (action.type) {

    case actionTypes.CHANGE_PASSWORD_REQUEST:
    case actionTypes.PAYMENT_IGNORE_REQUEST:
    case actionTypes.UPDATE_USER_INFO_REQUEST:
    case actionTypes.PAYMENT_REQUEST:
    case actionTypes.CREATE_ACCOUNT_REQUEST:
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      console.log(action.response)
      return {
        ...state,
        isFetching: false,
        token: action.response.access,
      };

    case actionTypes.CHANGE_PASSWORD_SUCCESS:
    case actionTypes.CHANGE_PASSWORD_FAILURE:
    case actionTypes.PAYMENT_IGNORE_FAILURE:
    case actionTypes.UPDATE_USER_INFO_FAILURE:
    case actionTypes.PAYMENT_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case actionTypes.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        info: {
          ...state.info,
          ...action.payload,
        }
      }

    case actionTypes.PAYMENT_SUCCESS:
      window.location.replace(action.data.pay_link)
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.data[0].fields,
      }

    case actionTypes.PAYMENT_IGNORE_SUCCESS:
      window.location.reload();
      return {
        ...state,
        isFetching: false,
      };

    case actionTypes.CHECK_PAYMENT_STATUS_SUCCESS:
      return {
        ...state,
        payments: action.data,
      }


    //////////////////////////

    case actionTypes.LOGOUT:
      return initState;

    //////////////////////////

    case actionTypes.PROVINCE_SUCCESS:
      return {
        ...state,
        provinces: action.data,
      }

    case actionTypes.CITY_SUCCESS:
      return {
        ...state,
        cities: action.data,
      }

    case actionTypes.SCHOOL_SUCCESS:
      return {
        ...state,
        schools: action.data,
      }
    /////////////////////
    // formula0
    case actionTypes.TEAM_LOGIN_SUCCESS:
      return {
        ...state,
        team_id: action.data.team_id,
        isFetching: false,
      }

    default:
      return state;
  }
}

export default account;
