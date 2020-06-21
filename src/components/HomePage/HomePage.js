import React from 'react';
import { connect } from 'react-redux';
import SearchRepos from './SearchRepos/SearchRepos';
import RepoList from './ReposList/ReposList';
import Pagination from './Pagination/Pagination';

const HomePage = ({ isFetching, status }) => {
  return (
      <>
        <SearchRepos/>
        {isFetching ? 
          <p>loading..</p> :
          status === 'error' ? 
            <p>error response GitHub</p> :
            <>
              <RepoList/>
              <Pagination/>
            </>  
        }
        
      </>
  )
};

const mapStateToProps = (state) => ({
  isFetching: state.repos.isFetching,
  status: state.repos.status
});

export default connect(mapStateToProps)(HomePage);
