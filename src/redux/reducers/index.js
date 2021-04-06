import { combineReducers } from 'redux';
import account from './account';
import notifications from './notifications';
import redirect from './redirect';
import exam from './exam';
import formula0 from './formula0';

const allReducers = combineReducers({
  formula0,
  notifications,
  account,
  redirect,
  exam,
});
export default allReducers;
