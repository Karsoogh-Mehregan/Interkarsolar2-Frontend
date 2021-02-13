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
        }, 0);
      return { ...state };

    case actionTypes.LOGIN_SUCCESS:
      setTimeout(
        () => {
          toast.success('دوباره سلام!');
        }, 0)
      return { ...state };

    case actionTypes.LOGIN_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      console.log(action)
      if (action.error) {
        console.log(action)
        setTimeout(
          () => {
            toast.error(action.error);
          }, 0)
      } else {
        setTimeout(
          () => {
            toast.error('ای بابا! یه مشکلی وجود داره. یه چند لحظه دیگه دوباره امتحان کن.');
          }, 0)
      }
      return { ...state }

    case actionTypes.LOGOUT_REQUEST:
      setTimeout(
        () => {
          toast.info('خدا به همراهت!');
        }, 0)
      return { ...state };

    case actionTypes.LOGOUT:
      setTimeout(
        () => {
          toast.warning('احتمالاً توکنت منقضی شده. باید دوباره وارد بشی!');
        }, 0)
      return { ...state };

    default:
      return state;
  }
}

export default notifications;