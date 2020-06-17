import React from 'react';
import { connect } from 'react-redux';
import SearchRepos from './SearchRepos/SearchRepos';
import RepoList from './ReposList/ReposList';
import Pagination from './Pagination/Pagination';

const HomePage = ({ isFetching }) => {
  return (
      <>
        <SearchRepos/>
        {isFetching ? 
          <p>loading..</p> :
          <>
            <RepoList/>
            <Pagination/>
          </>  
        }
        
      </>
  )
};

const mapStateToProps = (state) => ({
  isFetching: state.repos.isFetching
});

export default connect(mapStateToProps)(HomePage);
