import { REQ_COMMITS, RES_COMMITS, RES_COMMIT, ERR_COMMITS } from './actions';

// initial state
const initialCommits = {
  isFetching: false,
  status: 'success',
  lastCommitsArr: []
};

const commits = (state = initialCommits, action) => {
  const {type, lastCommitsArr, lastCommit, status, isFetching} = action;
  switch (type) {
    case REQ_COMMITS:
      return {...state, isFetching};
    case RES_COMMITS:
      return {...state, isFetching, status, lastCommitsArr};
    case RES_COMMIT:
      return {...state, isFetching, status};
    case ERR_COMMITS:
      return {...state, isFetching, status};
    default:
      return state;
  };
};

export default commits;