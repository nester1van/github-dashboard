import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRepoById } from '../../redux/repoById/actions';
import formatDate from '../../js/formatDate';
import './repoCardPage.css';

const RepoCardPage = ({ lastCommit, 
  mostActiveContributorsArr,languagesObj, repo, getRepoById, isFetching, status}) => {
  let id = useParams();
  const { fullName, stargazersCount, avatarUrl,
          login, userUrl, description } = repo;

  useEffect(() => {
    getRepoById(id.id);
  }, []);

  return (
    <div className="repoCardPage">
        {isFetching ?
          <p className="loading">loading..</p> :
          status === 'error' ? 
            <p className="error">error response GitHub</p> :
            <>
              <p className="fullName">{fullName}</p>
              <p className="star">&#9733; {stargazersCount}</p>
              <p className="lastCommit">latest commit on {formatDate(lastCommit)}</p>
              <p className="avatar"><img src={avatarUrl}/></p>
              <p className="login"><a href={userUrl} target='_blank'>{login}</a></p>
              <p className="languages"><strong>languages: </strong>{Object.keys(languagesObj).join(', ')}</p>
              <p className="description"><strong>description: </strong>{description}</p>
              <p className="contributors"><strong>most active contributors: </strong>{mostActiveContributorsArr.join(', ')}</p>
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
  isFetching: state.repo.isFetching,
  status: state.repo.status
});

export default connect(mapStateToProps, {getRepoById})(RepoCardPage);