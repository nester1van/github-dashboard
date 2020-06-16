import React from 'react';
import SearchRepos from './SearchRepos/SearchRepos';
import RepoList from './ReposList/ReposList';
import Pagination from './Pagination/Pagination';

export default function HomePage() {
  return (
      <>
        <SearchRepos/>
        <RepoList/>
        <Pagination/>
      </>
  )
};

