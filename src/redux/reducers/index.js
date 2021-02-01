import { combineReducers } from 'redux';
import account from './account';
import notifications from './notifications';
import loading from './loading';
import redirect from './redirect';

const allReducers = combineReducers({
  account,
  notifications,
  redirect,
  loading,
});
export default allReducers;
