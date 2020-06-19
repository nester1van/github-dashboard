import fnCommitJSONToLastCommit from './fnCommitJSONToLastCommit';

// action types
export const REQ_LAST_COMMIT = 'REQ_LAST_COMMIT';
export const RES_LAST_COMMIT = 'RES_LAST_COMMIT';
export const ERR_LAST_COMMIT = 'ERR_LAST_COMMIT';

// action creators
export const reqLastCommit = () => ({
  type: REQ_LAST_COMMIT,
  isFetching: true
});

export const resLastCommit = (lastCommit) => ({
  type: RES_LAST_COMMIT,
  isFetching: false,
  lastCommit, 
  status: 'success'
});

export const errLastCommit = () => ({
  type: ERR_LAST_COMMIT,
  isFetching: false,
  status: 'error'
});

// URL creator
const lastCommitUrl = (commitsUrl) => `${commitsUrl}?per_page=1&page=1`;

// async action creator
export const getLastCommit = (commitsUrl) => (dispatch) => {
  dispatch(reqLastCommit());
  return fetch(lastCommitUrl(commitsUrl))
  .then(res => res.json())
  .then(json => {
    if (Array.isArray(json) && json.length > 0){
      dispatch(resLastCommit(fnCommitJSONToLastCommit(json)));
    } else {
      dispatch(errLastCommit());
    }     
  });
};