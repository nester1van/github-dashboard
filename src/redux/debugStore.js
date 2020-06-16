import {setCurrentPage, setPerPage, setQuery, getRepos } from './reposWithCommitsAndContributors/actions';
import { getMostActiveContributors } from './mostActiveContributors/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(getRepos('react', 3, 1));
    // store.dispatch(getMostActiveContributors('https://api.github.com/repos/facebook/jest/contributors', 10));
    //store.dispatch(setCurrentPage(5));
    // store.dispatch(setPerPage(50));
    // store.dispatch(setQuery('react'))
  } 
};

export default debugStore;