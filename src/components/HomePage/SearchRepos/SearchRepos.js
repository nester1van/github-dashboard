import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getRepos, setQuery, setCurrentPage } from '../../../redux/reposWithCommitsAndContributors/actions';

let componentDidMount = false;
const SearchRepos = ({totalCount, currentPage, perPage, query, getRepos, setQuery, setCurrentPage}) => {  

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    //localStorage.setItem('test', 1);
    //console.log(localStorage.getItem('test'));
    // currentPage query

    //componentDidMount = true;
  }, []);

  useEffect(() => {
    // max = Math.ceil(totalCount / perPage);
    // if (currentPage > max) {
    //   setCurrentPage(max);
    //   currentPage = max;
    // }
    let timerId;
    if (componentDidMount) {
      timerId = setTimeout(() => {
        if (localStorage.getItem('query') !== query) {
          localStorage.setItem('query', query);
          localStorage.setItem('currentPage', 1);
          setCurrentPage(1);
          getRepos(query, perPage, 1);
        } else {
          //getRepos(query, perPage, currentPage);
        }
      }, 1000);
    }
    return () => {
      componentDidMount = true;
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