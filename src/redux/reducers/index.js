import { combineReducers } from 'redux';
import account from './account';
import notifications from './notifications';
import redirect from './redirect';
import exam from './exam';

const allReducers = combineReducers({
  account,
  notifications,
  redirect,
  exam,
});
export default allReducers;
