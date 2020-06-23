import { REQ_CONTRIBUTORS, RES_CONTRIBUTORS, ERR_CONTRIBUTORS } from './actions';


const initialContributors =  {
  isFetching: false,
  status: 'success',
  mostActiveContributorsArr: []
};

const contributors = (state = initialContributors, action) => {
  const {type, isFetching, status, mostActiveContributorsArr} = action;
  switch(type) {
    case REQ_CONTRIBUTORS:
      return {...state, isFetching};
    case RES_CONTRIBUTORS:
      return {isFetching, status, mostActiveContributorsArr};
    case ERR_CONTRIBUTORS:
      return {...state, isFetching, status};
    default:
      return state;
  };
};

export default contributors;