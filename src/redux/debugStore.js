import {setCurrentPage, setPerPage, setQuery, getRepos } from './reposWithCommits/actions';
import { getMostActiveContributors } from './mostActiveContributors/actions';
import { getLanguages } from './languages/actions';
import { getRepoById } from './repoById/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(getRepos('react', 3, 1));
    // store.dispatch(getMostActiveContributors('https://api.github.com/repos/facebook/jest/contributors', 10));
    //store.dispatch(setCurrentPage(5));
    // store.dispatch(setPerPage(50));
    // store.dispatch(setQuery('react'))
    // store.dispatch(getLanguages('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages'));
    // store.dispatch(getRepoById(11730342));
  } 
};

export default debugStore;