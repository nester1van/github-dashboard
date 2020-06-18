import fnRepoByIdJSONToRepo from './fnRepoByIdJSONToRepo';
import { getLanguages } from '../languages/actions';
import { getMostActiveContributors } from '../mostActiveContributors/actions';
import { getArrCommits } from '../lastCommits/actions';

// action types 
// https://api.github.com/repositories/11730342
export const REQ_REPO_BY_ID = 'REQ_REPO_BY_ID';
export const RES_REPO_BY_ID = 'RES_REPO_BY_ID';
export const ERR_REPO_BY_ID = 'ERR_REPO_BY_ID';

// action creators
const reqRepoById = () => ({
  type: REQ_REPO_BY_ID,
  isFetching: true
});
const resRepoById = (repo) => ({
  type: RES_REPO_BY_ID,
  isFetching: false,
  repo,
  status: 'success'
});
const errRepoByID = () => ({
  type: ERR_REPO_BY_ID,
  isFetching: false,
  status: 'error'
});

// URL creator
const repoURLbyId = (id) => `https://api.github.com/repositories/${id}`;

// async action creator
export const getRepoById = (id) => (dispatch) => {
  dispatch(reqRepoById());
  return fetch(repoURLbyId(id))
    .then(res => res.json()) 
    .then(json => {
      if (json.id) {
        dispatch(resRepoById(fnRepoByIdJSONToRepo(json)));
        getLanguages(json.languages_url)(dispatch);
        getMostActiveContributors(json.contributors_url, 10)(dispatch);
        getArrCommits([json.commits_url.replace('{/sha}', '')])(dispatch);
      } else {
        dispatch(errRepoByID());
      };
    });
};