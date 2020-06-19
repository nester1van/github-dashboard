import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRepoById } from '../../redux/repoById/actions';
import formatDate from '../../js/formatDate';

const RepoCardPage = ({ lastCommit, 
  mostActiveContributorsArr,languagesObj, repo, getRepoById }) => {
  let id = useParams();
  const { fullName, stargazersCount, avatarUrl,
          login, userUrl, description } = repo;

  useEffect(() => {
    getRepoById(id.id);
  }, []);

  return (
    <>
      <p>{fullName}</p>
      <p>&#9734; {stargazersCount}</p>
      <p>last commit date: {formatDate(lastCommit)}</p>
      <p><img src={avatarUrl}/></p>
      <p><a href={userUrl} target='_blank'>{login}</a></p>
      <p>languages: {Object.keys(languagesObj).join(', ')}</p>
      <p>description: {description}</p>
      <p>most active contributors: {mostActiveContributorsArr.join(', ')}</p>
      <Link to="/">Back to repos list</Link>
    </>
  )
};

const mapStateToProps = (state) => ({
  lastCommit: state.commit.lastCommit,
  mostActiveContributorsArr: state.contributors.mostActiveContributorsArr,
  languagesObj: state.languages.languagesObj,
  repo: state.repo.repo
});

export default connect(mapStateToProps, {getRepoById})(RepoCardPage);