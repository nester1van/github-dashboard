import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setQuery, setCurrentPage, getRepos } from '../../redux/reposWithCommits/actions';

const LocalStorage = ({ children, setQuery, setCurrentPage, getRepos, perPage }) => {

  useEffect(() => {
    if (!localStorage.getItem('query')) {
      localStorage.setItem('query', '');
    }
    if (!localStorage.getItem('currentPage')) {
      localStorage.setItem('currentPage', 1);
    }
    let query = localStorage.getItem('query');
    let currentPage = parseInt(localStorage.getItem('currentPage'));
    setQuery(query);
    setCurrentPage(currentPage);
    getRepos(query, perPage, currentPage);

  }, []);

  return (
    <>
    {children}
    </>
  )

};

const mapStateToProps = (state) => ({
  perPage: state.repos.perPage
});

export default connect(mapStateToProps, {setQuery, setCurrentPage, getRepos})(LocalStorage);