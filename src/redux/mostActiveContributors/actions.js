import fnContributorsJSONToMostActiveContributors 
  from './fnContributorsJSONToMostActiveContributors';

// action types
export const REQ_CONTRIBUTORS = 'REQ_CONTRIBUTORS';
export const RES_CONTRIBUTORS = 'RES_CONTRIBUTORS';
export const ERR_CONTRIBUTORS = 'ERR_CONTRIBUTORS';

// action creators
export const reqContributors = () => ({
  type: REQ_CONTRIBUTORS,
  isFetching: true
});
export const resContributors = (mostActiveContributorsArr) => ({
  type: RES_CONTRIBUTORS,
  isFetching: false,
  status: 'success',
  mostActiveContributorsArr
});
export const errContributors = () => ({
  type: ERR_CONTRIBUTORS,
  isFetching: false,
  status: 'error'
});

// async action creator
export const getMostActiveContributors = (urlContributors, perPage) => (dispatch) => {
  dispatch(reqContributors());
  return fetch(`${urlContributors}?per_page=${perPage}`)
    .then(res => res.json()) 
    .then(json => {
      if (json.length > 0) {
        dispatch(resContributors(fnContributorsJSONToMostActiveContributors(json)));
      } else {
        dispatch(errContributors());
      }
    });
};

