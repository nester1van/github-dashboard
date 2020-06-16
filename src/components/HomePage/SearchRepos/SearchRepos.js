import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getRepos, setQuery } from '../../../redux/reposWithCommitsAndContributors/actions';

const SearchRepos = ({currentPage, perPage, query, getRepos, setQuery}) => {

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      getRepos(query, perPage, currentPage);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [query]);


  return (
    <>
        <input 
          onChange={handleChange}
          type="search" 
          placeholder="search.." 
          value={query}/>
    </>
  )
};

const mapStateToProps = (state) => ({
  currentPage: state.repos.currentPage,
  perPage: state.repos.perPage,
  query: state.repos.query
});

export default connect(mapStateToProps, {getRepos, setQuery})(SearchRepos);