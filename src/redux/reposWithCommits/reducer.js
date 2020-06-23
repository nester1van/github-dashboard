import {  SET_CURRENT_PAGE, SET_PER_PAGE, SET_QUERY ,
          REQ_REPOS, RES_REPOS, ERR_REPOS } from './actions';

const initialRepos = {  
  isFetching: false,
  status: 'success',
  reposArr: [],
  currentPage: 1,
  perPage: 10,
  query: '',
  totalCount: 1
};

const repos = (state = initialRepos, action) => {
  const {type, isFetching, status, totalCount, reposArr, currentPage, perPage, query } = action;
  switch (type) {
    case SET_CURRENT_PAGE:
      return {...state, currentPage};
    case SET_PER_PAGE:
      return {...state, perPage};
    case SET_QUERY:
      return {...state, query};
    case REQ_REPOS:
      return {...state, isFetching};
    case RES_REPOS:
      return {...state, isFetching, status, reposArr, totalCount};
    case ERR_REPOS:
      return {...state, isFetching, status};
    default:
      return state; 
  }
};

export default repos;