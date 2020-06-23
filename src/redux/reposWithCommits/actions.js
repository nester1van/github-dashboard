import fnReposJSONToRepos from './fnReposJSONToRepos';
import { getArrCommits }  from '../lastCommits/actions';

// action types
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_PER_PAGE = 'SET_PER_PAGE';
export const SET_QUERY = 'SET_QUERY';

export const REQ_REPOS = 'REQ_REPOS';
export const RES_REPOS = 'RES_REPOS';
export const ERR_REPOS = 'ERR_REPOS'; 

// action creators
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setPerPage = (perPage) => ({
  type: SET_PER_PAGE,
  perPage
});
export const setQuery = (query) => ({
  type: SET_QUERY,
  query
});

const reqRepos = () => ({
  type: REQ_REPOS,
  isFetching: true
});
const resRepos = ({totalCount, reposArr}) => ({
  type: RES_REPOS,
  isFetching: false,
  status: 'success',
  reposArr,
  totalCount
});
const errRepos = () => ({
  type: ERR_REPOS,
  isFetching: false,
  status: 'error'
});

// URL creators
const reposURL = (query, perPage, page) => {
  if (query.length) {
    return `https://api.github.com/search/repositories?q=${query}&per_page=${perPage}&page=${page}&sort=stars`;
  } else {
    // most popular repositories
    return `https://api.github.com/search/repositories?q=stars:>100000&per_page=${perPage}&page=${page}&sort=stars`;
  }
  
};

// async action creator 
export const getRepos = (query, perPage, page) => (dispatch) => {
  dispatch(reqRepos());  
  return fetch(reposURL(query, perPage, page))
  .then(res => res.json())
  .then(json => {
    if (json.items) {

      // запрос массива Commits :
      let arrCommitsUrl = [];
      json.items.forEach((repo, index) => {
        arrCommitsUrl[index] = repo.commits_url.replace('{/sha}', '');
      });
      
      getArrCommits(arrCommitsUrl)(dispatch);

      dispatch(resRepos(fnReposJSONToRepos(json)));
    } else {
      dispatch(errRepos());
    }
  });
}; 