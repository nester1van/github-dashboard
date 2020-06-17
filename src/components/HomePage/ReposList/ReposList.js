import React from 'react';
import { connect } from 'react-redux';
import RepoItem from '../RepoItem/RepoItem';

const RepoList = ({ reposArr, lastCommitsArr }) => {
  return (
    <>
      {reposArr.map((repo, index) => 
              <RepoItem key={repo.id} repo={repo} lastCommitDate={lastCommitsArr[index]}/>
      )}
    </>
  )
};

const mapStateToProps = (state) => ({
  reposArr: state.repos.reposArr,
  lastCommitsArr: state.commits.lastCommitsArr,
  isFetching: state.repos.isFetching
})

export default connect(mapStateToProps)(RepoList);