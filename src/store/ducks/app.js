/* Default state
================================== */
const DEFAULT_STATE = {
  accounts: [],
  sortAccountsBy: 'id',
  sortAscending: true
};

/* Actions
================================== */
const SET_ACCOUNTS = 'app/SET_ACCOUNTS';
const SORT_ACCOUNTS = 'app/SORT_ACCOUNTS';

/* Reducer
================================== */
const appReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      const { accounts } = action;
      return { ...state, accounts };

    case SORT_ACCOUNTS:
      const { prop } = action;

      const sortedAccounts = state.accounts.sort((a, b) => {
        if (state.sortAccountsBy === prop) {
          if (state.sortAscending) return b[prop] - a[prop];
          else return a[prop] - b[prop];
        }

        return a[prop] - b[prop];
      });

      return {
        ...state,
        accounts: [...sortedAccounts],
        sortAccountsBy: prop,
        sortAscending: state.sortAccountsBy === prop && !state.sortAscending
      };
    default:
      return state;
  }
};

export default appReducer;

/* Action creators
================================== */
export const setAccounts = accounts => ({ type: SET_ACCOUNTS, accounts });
export const sortAccountsBy = prop => ({ type: SORT_ACCOUNTS, prop });
