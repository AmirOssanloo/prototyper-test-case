/* Default state
================================== */
const DEFAULT_STATE = {
  accounts: []
};

/* Actions
================================== */
const SET_ACCOUNTS = 'app/SET_ACCOUNTS';

/* Reducer
================================== */
const appReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      const { accounts } = action;
      return { ...state, accounts };
    default:
      return state;
  }
};

export default appReducer;

/* Action creators
================================== */
export const setAccounts = accounts => ({ type: SET_ACCOUNTS, accounts });
