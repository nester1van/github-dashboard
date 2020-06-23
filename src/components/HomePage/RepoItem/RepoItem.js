import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatDate from '../../../js/formatDate';
import './repoItem.css';

const RepoItem = ({ repo, lastCommitDate, isFetching, status }) => {
  const { fullName, id ,htmlUrl, stargazersCount } = repo;

  const formatedDate = formatDate(lastCommitDate);

  const goToRepo = () => {
    return htmlUrl;
  };


  const fnCommitDate = () => {
    return (
        isFetching ? 
          <span id="loading">loading..</span> :
          status === 'error' ? 
          <span className="error">error response GitHub</span> :
          <span> {formatedDate}</span>
    );
  };

  return (
    <div className="repoItem">
      <div className="fullName"><Link to={`/repocard/${id}`}>{fullName}</Link></div>
      <div className="lastCommit">latest commit on{fnCommitDate()}</div>
      <div className="stars"><span>&#9733;</span> {stargazersCount}</div>
      <div className="gitLink"><a href={goToRepo()}>link to github</a></div>
    </div>
  ) 
};

const mapStateToProps = (state) => ({
  isFetching: state.commits.isFetching,
  status: state.commits.status
});

export default connect(mapStateToProps, {})(RepoItem);