import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import RepoUserAvatar from './RepoUserAvatar/RepoUserAvatar';
import RepoCard from './RepoCard/RepoCard';
import { getMostActiveContributors } from '../../redux/mostActiveContributors/actions';
import { getLanguages } from '../../redux/languages/actions';
import formatDate from '../../js/formatDate';

const RepoCardPage = ({ reposArr, lastCommitsArr, 
  mostActiveContributorsArr, getMostActiveContributors, 
  languagesObj, getLanguages }) => {

  let id = useParams();

  const repo = reposArr.filter(repo => repo.id === parseInt(id.id))[0];
  const repoIndex = reposArr.findIndex(repo => repo.id === parseInt(id.id));
  const lastCommit = lastCommitsArr[repoIndex];
  console.log(lastCommit);
  const { contributorsUrl, fullName, stargazersCount, avatarUrl,
          login, userUrl, description, languagesUrl } = repo;

  useEffect(() => {
    getMostActiveContributors(contributorsUrl, 10);
    getLanguages(languagesUrl);
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
    
      {/* <RepoUserAvatar/>
      <RepoCard/> */}
      <Link to="/">Back to repos list</Link>
    </>
  )
};

const mapStateToProps = (state) => ({
  reposArr: state.repos.reposArr,
  lastCommitsArr: state.commits.lastCommitsArr,
  mostActiveContributorsArr: state.contributors.mostActiveContributorsArr,
  languagesObj: state.languages.languagesObj
});

export default connect(mapStateToProps, {getMostActiveContributors, getLanguages})(RepoCardPage);