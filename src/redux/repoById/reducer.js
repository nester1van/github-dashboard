import { REQ_REPO_BY_ID, RES_REPO_BY_ID, ERR_REPO_BY_ID } from './actions';

const initialRepo = {
  isFetching: false,
  repo: {},
  status: 'success'
};

const repo = (state = initialRepo, action) => {
  const { type, isFetching, repo, status } = action;
  switch (type) {
    case REQ_REPO_BY_ID:
      return {...state, isFetching};
    case RES_REPO_BY_ID:
      return {isFetching, repo, status};
    case ERR_REPO_BY_ID:
      return {...state, isFetching, status};
    default:
      return state;
  }
};

export default repo;