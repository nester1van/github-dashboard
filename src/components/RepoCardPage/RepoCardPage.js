import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRepoById } from '../../redux/repoById/actions';
import formatDate from '../../js/formatDate';
import './repoCardPage.css';

const RepoCardPage = ({ lastCommit, mostActiveContributorsArr,languagesObj, 
  repo, getRepoById, isFetchingRepo, statusRepo, isFetchingCommit, 
  statusCommit, isFetchingContributors, statusContributors, 
  isFetchingLanguages, statusLanguages}) => {
  let id = useParams();
  const { fullName, stargazersCount, avatarUrl,
          login, userUrl, description } = repo;

  useEffect(() => {
    getRepoById(id.id);
  }, []);

  const formatedDate = formatDate(lastCommit);

  const fnHandleFetch = (isFetching, status, data) => {
    console.log(lastCommit);
    return (
        isFetching ? 
          <span className="loading1">loading..</span> :
          status === 'error' ? 
          <span className="error"> error response GitHub</span> :
          <span>{data}</span>
    );
  };

  return (
    <div className="repoCardPage">
        {isFetchingRepo ?
          <p className="loading1">loading..</p> :
          statusRepo === 'error' ? 
            <p className="error">error response GitHub</p> :
            <>
              <p className="fullName">{fullName}</p>
              <p className="star">&#9733; {stargazersCount}</p>
              <p className="lastCommit">
                latest commit on 
                {fnHandleFetch(isFetchingCommit, statusCommit, formatedDate)}
              </p>
              <p className="avatar"><img src={avatarUrl}/></p>
              <p className="login"><a href={userUrl} target='_blank'>{login}</a></p>
              <p className="languages">
                <strong>languages: </strong>
                {fnHandleFetch(isFetchingLanguages, statusLanguages, 
                  Object.keys(languagesObj).join(', '))}
              </p>
              <p className="description"><strong>description: </strong>{description}</p>
              <p className="contributors">
                <strong>most active contributors: </strong>
                {fnHandleFetch(isFetchingContributors, statusContributors,
                  mostActiveContributorsArr.join(', '))}
              </p>
              <Link to="/" className="backTo">Back to repos list</Link>
            </>
        }
      </div>  
  )
};

const mapStateToProps = (state) => ({
  lastCommit: state.commit.lastCommit,
  mostActiveContributorsArr: state.contributors.mostActiveContributorsArr,
  languagesObj: state.languages.languagesObj,
  repo: state.repo.repo,
  isFetchingRepo: state.repo.isFetching,
  statusRepo: state.repo.status,
  isFetchingCommit: state.commit.isFetching,
  statusCommit: state.commit.status,
  isFetchingContributors: state.contributors.isFetching,
  statusContributors: state.contributors.status,
  isFetchingLanguages: state.languages.isFetching,
  statusLanguages: state.languages.status
});

export default connect(mapStateToProps, {getRepoById})(RepoCardPage);