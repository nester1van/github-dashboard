import { REQ_COMMITS, RES_COMMITS, ERR_COMMITS } from './actions';

// initial state
const initialCommits = {
  lastCommitsArr: [],
  status: 'success',
  isFetching: false
};

const commits = (state = initialCommits, action) => {
  const {type, lastCommitsArr, status, isFetching} = action;
  switch (type) {
    case REQ_COMMITS:
      return {...state, isFetching};
    case RES_COMMITS:
      return {lastCommitsArr, status, isFetching};
    case ERR_COMMITS:
      return {...state, status, isFetching};
    default:
      return state;
  };
};

export default commits;