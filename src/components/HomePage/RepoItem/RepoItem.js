import React from 'react';

const RepoItem = () => {
  return (
    <div>
      <p>[Название репозитория] - full_name</p>
      <p>[кол-во звёзд на github] - stargazers_count</p>
      <p>[дата последнего коммита] - commits_url</p>
      <p>[ссылка на Github] - html_url</p>
    </div>
  ) 
};

export default RepoItem;