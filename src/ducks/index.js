import { combineReducers } from 'redux';
import worktime from './worktime';

const worktimeApp = combineReducers({
  worktime,
});

export default worktimeApp;