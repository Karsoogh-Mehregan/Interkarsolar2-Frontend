import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

function notifications(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      console.log(action);
      toast.success('ورودت رو به کهکشان مهرگان خوش‌آمد میگم!');
      return { ...state }

    case actionTypes.LOGIN_SUCCESS:
      toast.success('دوباره سلام!');
      return { ...state }

    case actionTypes.LOGIN_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      toast.error('ای بابا! یه مشکلی وجود داره. یه چند لحظه دیگه دوباره امتحان کن.');
      return { ...state }

    default:
      return state;
  }
}

export default notifications;