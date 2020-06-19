import { combineReducers } from 'redux';
import repos from './reposWithCommits/reducer';
import commits from './lastCommits/reducer';
import repo from './repoById/reducer';
import commit from './lastCommit/reducer';
import contributors from './mostActiveContributors/reducer';
import languages from './languages/reducer';


const reducers = combineReducers({
  repos,
  commits,
  repo,
  commit,
  contributors,
  languages
});

export default reducers;
