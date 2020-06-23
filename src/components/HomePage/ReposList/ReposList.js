import React        from 'react';
import { connect }  from 'react-redux';
import RepoItem     from '../RepoItem/RepoItem';
import './reposList.css';

const RepoList = ({ reposArr, lastCommitsArr }) => {
  return (
    <div className="reposList">
      {reposArr.map((repo, index) => 
        <RepoItem key={repo.id} repo={repo} lastCommitDate={lastCommitsArr[index]}/>
      )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  reposArr: state.repos.reposArr,
  lastCommitsArr: state.commits.lastCommitsArr,
  isFetching: state.repos.isFetching
})

export default connect(mapStateToProps)(RepoList);