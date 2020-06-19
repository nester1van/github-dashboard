import {REQ_LAST_COMMIT, RES_LAST_COMMIT, ERR_LAST_COMMIT} from './actions';

const initialState = {
  isFetching: false,
  lastCommit: '',
  status: 'success'
}

const commit = (state = initialState, action) => {
  const {type, isFetching, lastCommit, status} = action;
  switch (type) {
    case REQ_LAST_COMMIT:
      return {...state, isFetching};
    case RES_LAST_COMMIT:
      return {isFetching, lastCommit, status};
    case ERR_LAST_COMMIT:
      return {...state, isFetching, status};
    default:
      return state;
  }
}
export default commit;