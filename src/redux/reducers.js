import { combineReducers } from 'redux';
import repos from './reposWithCommitsAndContributors/reducer';
import commits from './lastCommits/reducer';
import contributors from './mostActiveContributors/reducer';

const reducers = combineReducers({
  repos,
  commits,
  contributors
});

export default reducers;
