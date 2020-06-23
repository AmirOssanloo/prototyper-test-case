/* Default state
================================== */
const DEFAULT_STATE = {
  title: ''
};

/* Actions
================================== */
const SET_TITLE = 'app/SET_TITLE';

/* Reducer
================================== */
const appReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
};

export default appReducer;

/* Action creators
================================== */
export const setAppTitle = title => {
  return { type: SET_TITLE, title };
};
