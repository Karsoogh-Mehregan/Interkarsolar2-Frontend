import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initState = {
  nothing: 'ddd',
};

function notifications(state = initState, action) {
  switch (action.type) {

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      setTimeout(
        () => {
          toast.success('ورودت رو به کهکشان مهرگان خوش‌آمد میگم!');
        }
        , 0);
      return { ...state };

    case actionTypes.LOGIN_SUCCESS:
      setTimeout(
        () => {
          toast.success('دوباره سلام!');
        }
        , 0)
      return { ...state };

    case actionTypes.LOGIN_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      setTimeout(
        () => {
          toast.error('ای بابا! یه مشکلی وجود داره. یه چند لحظه دیگه دوباره امتحان کن.');
        }
        , 0)
      return { ...state }

    case actionTypes.LOGOUT:
      setTimeout(
        () => {
          toast.info('خدا به همراهت!');
        }
        , 0)
      return { ...state };

    default:
      return state;
  }
}

export default notifications;