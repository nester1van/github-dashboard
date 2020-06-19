import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getRepos, setQuery, setCurrentPage } from '../../../redux/reposWithCommits/actions';


const SearchRepos = ({totalCount, currentPage, perPage, query, getRepos, setQuery, setCurrentPage}) => {  
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
      let   timerId = setTimeout(() => {
        if (localStorage.getItem('query') !== query) {
          localStorage.setItem('query', query);
          localStorage.setItem('currentPage', 1);
          setCurrentPage(1);
          getRepos(query, perPage, 1);
        }
      }, 1000);
    return () => {
      clearTimeout(timerId);}
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
  totalCount: state.repos.totalCount,
  currentPage: state.repos.currentPage,
  perPage: state.repos.perPage,
  query: state.repos.query
});

export default connect(mapStateToProps, {getRepos, setQuery, setCurrentPage})(SearchRepos);