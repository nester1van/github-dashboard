import { combineReducers } from 'redux';
import repos from './reposWithCommitsAndContributors/reducer';
import commits from './lastCommits/reducer';
import contributors from './mostActiveContributors/reducer';
import languages from './languages/reducer';

const reducers = combineReducers({
  repos,
  commits,
  contributors,
  languages
});

export default reducers;
