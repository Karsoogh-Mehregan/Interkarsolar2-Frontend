import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initState = {
  nothing: 'ddd',
};

function notifications(state = initState, action) {
  switch (action.type) {

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      toast.success('ورودت رو به کهکشان مهرگان خوش‌آمد میگم!');
      return { ...state }

    case actionTypes.LOGIN_SUCCESS:
      toast.success('دوباره سلام!');
      return { ...state }

    case actionTypes.LOGIN_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      toast.error('ای بابا! یه مشکلی وجود داره. یه چند لحظه دیگه دوباره امتحان کن.');
      return { ...state }

    case actionTypes.LOGOUT:
      toast.info('خدا به همراهت!')
      return { ...state }

    default:
      return state;
  }
}

export default notifications;