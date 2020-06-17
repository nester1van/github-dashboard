import {REQ_LANGUAGES, RES_LANGUAGES, ERR_LANGUAGES} from './actions';

const initialLanguages = {
  isFetching: false,
  languagesObj: {},
  status: 'success'
};

const languages = (state = initialLanguages, action) => {
  const { type, isFetching, languagesObj, status } = action;
  switch (type) {
    case REQ_LANGUAGES:
      return {...state, isFetching};
    case RES_LANGUAGES:
      return {isFetching, languagesObj, status};
    case ERR_LANGUAGES:
      return {...state, isFetching, status};
    default:
      return state;
  }
};

export default languages;