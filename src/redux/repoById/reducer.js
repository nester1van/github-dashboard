import { REQ_REPO_BY_ID, RES_REPO_BY_ID, ERR_REPO_BY_ID } from './actions';

const initialRepo = {
  isFetching: false,
  status: 'success',
  repo: {}
};

const repo = (state = initialRepo, action) => {
  const { type, isFetching, status, repo } = action;
  switch (type) {
    case REQ_REPO_BY_ID:
      return {...state, isFetching};
    case RES_REPO_BY_ID:
      return {isFetching, status, repo};
    case ERR_REPO_BY_ID:
      return {...state, isFetching, status};
    default:
      return state;
  }
};

export default repo;