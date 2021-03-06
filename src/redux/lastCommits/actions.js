import fnCommitsJSONToLastCommits from './fnCommitsJSONToLastCommits';

// action types
export const REQ_COMMITS = 'REQ_COMMITS';
export const RES_COMMITS = 'RES_COMMITS';
export const RES_COMMIT = 'RES_COMMIT';
export const ERR_COMMITS = 'ERR_COMMITS';

// action creators
export const reqCommits = () => ({
  type: REQ_COMMITS,
  isFetching: true
});

export const resCommits = (lastCommitsArr) => ({
  type: RES_COMMITS,
  isFetching: false,
  lastCommitsArr, 
  status: 'success'
});

export const resCommit = (lastCommit) => ({
  type: RES_COMMIT,
  isFetching: false,
  lastCommit, 
  status: 'success'
});

export const errCommits = () => ({
  type: ERR_COMMITS,
  isFetching: false,
  status: 'error'
});

// async action creator
export const getArrCommits = (arrCommitsUrl) => async (dispatch) => {
  dispatch(reqCommits());
  let commitsJSON = [], commitsPromise = [];
  arrCommitsUrl.forEach((commitsUrl, index) => {
    commitsPromise[index] = fetch(`${commitsUrl}?per_page=1&page=1`)
    .then(res => res.json())
    .then(json => {
      commitsJSON[index] = json; 
    });
  });
  await Promise.all(commitsPromise);
  let lastCommitsArr = fnCommitsJSONToLastCommits(commitsJSON);
  if (Array.isArray(lastCommitsArr) && lastCommitsArr.length > 0) {
    dispatch(resCommits(lastCommitsArr));
  } else {
    dispatch(errCommits());
  };
};