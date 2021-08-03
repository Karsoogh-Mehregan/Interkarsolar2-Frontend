import { combineReducers } from 'redux';
import account from './account';
import notifications from './notifications';
import redirect from './redirect';
import exam from './exam';
import game from './game';

const allReducers = combineReducers({
  game,
  notifications,
  account,
  redirect,
  exam,
});
export default allReducers;
