import {REQ_LANGUAGES, RES_LANGUAGES, ERR_LANGUAGES} from './actions';

const initialLanguages = {
  isFetching: false,
  status: 'success',
  languagesObj: {}
};

const languages = (state = initialLanguages, action) => {
  const { type, isFetching, status, languagesObj } = action;
  switch (type) {
    case REQ_LANGUAGES:
      return {...state, isFetching};
    case RES_LANGUAGES:
      return {isFetching, status, languagesObj};
    case ERR_LANGUAGES:
      return {...state, isFetching, status};
    default:
      return state;
  }
};

export default languages;