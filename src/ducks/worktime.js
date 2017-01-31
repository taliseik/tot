import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';


const DEFAULT_STATE = { 
  worktime: fromJS([]),
};

// Actions
export const load = createAction('worktime/LOAD');
export const create = createAction('worktime/CREATE');
export const update = createAction('worktime/UPDATE');
export const remove = createAction('worktime/REMOVE');

const reducer = handleActions({
  [load]: (state, action) => ({
    worktime: action.payload,
  }),
  [create]: (state, action) => ({
    worktime: state.worktime.push(action.payload),
  }),
  [update]: (state, action) => ({
    worktime: state.worktime.set(action.payload.get('id'), action.payload)
  }),
  [remove]: (state, action) => ({
    worktime: state.worktime.filterNot(o => o.get('id') === action.payload.get('id'))
  })
}, DEFAULT_STATE);

export default reducer;