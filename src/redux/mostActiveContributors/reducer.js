import { REQ_CONTRIBUTORS, RES_CONTRIBUTORS, ERR_CONTRIBUTORS } from './actions';


const initialContributors =  {
  mostActiveContributorsArr: [],
  status: 'success',
  isFetching: false
};

const contributors = (state = initialContributors, action) => {
  const {type, mostActiveContributorsArr, status, isFetching} = action;
  switch(type) {
    case REQ_CONTRIBUTORS:
      return {...state, isFetching};
    case RES_CONTRIBUTORS:
      return {mostActiveContributorsArr, status, isFetching};
    case ERR_CONTRIBUTORS:
      return {...state, status, isFetching};
    default:
      return state;
  };
};

export default contributors;