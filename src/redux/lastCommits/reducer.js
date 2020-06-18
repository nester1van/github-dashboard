import { REQ_COMMITS, RES_COMMITS, RES_COMMIT, ERR_COMMITS } from './actions';

// initial state
const initialCommits = {
  lastCommit: '',
  lastCommitsArr: [],
  status: 'success',
  isFetching: false
};

const commits = (state = initialCommits, action) => {
  const {type, lastCommitsArr, lastCommit, status, isFetching} = action;
  switch (type) {
    case REQ_COMMITS:
      return {...state, isFetching};
    case RES_COMMITS:
      return {...state, lastCommitsArr, status, isFetching};
    case RES_COMMIT:
      return {...state, lastCommit, status, isFetching};
    case ERR_COMMITS:
      return {...state, status, isFetching};
    default:
      return state;
  };
};

export default commits;