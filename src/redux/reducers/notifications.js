import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initState = {
  success: '',
  error: '',
  info: '',
  warning: '',
};

function notifications(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_RANDOM_SINGLE_PROBLEM_SUCCESS:
    case actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_SUCCESS:
      return {
        ...state,
        success: action.response?.message || 'عملیات خواسته شده با موفقیت انجام شد!'
      }

    case actionTypes.GET_RANDOM_SINGLE_PROBLEM_FAILURE:
    case actionTypes.GET_RANDOM_MULTIPLE_PROBLEM_FAILURE:
      console.log(action)
      return {
        ...state,
        error: action.error || 'عملیات موفق نبود! یه چند لحظه دیگه دوباره تلاش کن.'
      }

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        success: 'ورودت رو به کهکشان مهرگان خوش‌آمد میگم!',
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        success: 'دوباره سلام!',
      };

    case actionTypes.EXAM_REGISTER_FAILURE:
    case actionTypes.CHANGE_PASSWORD_FAILURE:
    case actionTypes.SEND_ANSWER_FAILURE:
    case actionTypes.PAYMENT_IGNORE_FAILURE:
    case actionTypes.PAYMENT_FAILURE:
    case actionTypes.UPDATE_USER_INFO_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.error || action.response?.message || 'ای بابا! یه مشکلی وجود داره. یه چند لحظه دیگه دوباره امتحان کن.',
      }

    case actionTypes.LOGOUT:
      setTimeout(
        () => {
          toast.info('خدا به همراهت!')
        }, 0)
      return { ...state };

    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        success: 'خوبه! رمزت با موفقیت به اون چیزی که وارد کردی، تغییر کرد.',
      };



    case actionTypes.INIT_TOAST:
      return initState;

    default:
      return state;
  }
}

export default notifications;