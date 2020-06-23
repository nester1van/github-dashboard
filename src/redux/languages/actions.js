// action types
export const REQ_LANGUAGES = 'REQ_LANGUAGES';
export const RES_LANGUAGES = 'RES_LANGUAGES';
export const ERR_LANGUAGES = 'ERR_LANGUAGES';

// action creators
const reqLanguages = () => ({
  type: REQ_LANGUAGES,
  isFetching: true
});
const resLanguages = (languagesObj) => ({
  type: RES_LANGUAGES,
  isFetching: false,
  status: 'success',
  languagesObj
});
const errLanguages = () => ({
  type: ERR_LANGUAGES,
  isFetching: false,
  status: 'error'
});

// async action creator
export const getLanguages = (languagesUrl) => (dispatch) => {
  dispatch(reqLanguages());
  return fetch(languagesUrl)
    .then(res => res.json()) 
    .then(json => {
      if (json.message) {
        dispatch(errLanguages());
      } else {
        dispatch(resLanguages(json));
      }
    });
};

