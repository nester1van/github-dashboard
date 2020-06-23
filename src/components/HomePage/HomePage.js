import React       from 'react';
import { connect } from 'react-redux';
import SearchRepos from './SearchRepos/SearchRepos';
import RepoList    from './ReposList/ReposList';
import Pagination  from './Pagination/Pagination';
import './homePage.css';

const HomePage = ({ isFetching, status }) => {
  return (
      <div className="homePage">
        <SearchRepos/>
        {isFetching ? 
          <p className="loading">loading..</p> :
          status === 'error' ? 
            <p className="error">error response GitHub</p> :
            <>
              <RepoList/>
              <Pagination/>
            </>  
        }
        
      </div>
  )
};

const mapStateToProps = (state) => ({
  isFetching: state.repos.isFetching,
  status: state.repos.status
});

export default connect(mapStateToProps)(HomePage);
