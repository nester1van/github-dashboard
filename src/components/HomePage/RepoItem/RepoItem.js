import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../../js/formatDate';
import './repoItem.css';

const RepoItem = ({ repo, lastCommitDate }) => {
  const { fullName, id ,htmlUrl, stargazersCount } = repo;

  const formatedDate = formatDate(lastCommitDate);

  const goToRepo = () => {
    return htmlUrl;
  }

  return (
    <div className="repoItem">
      <p><Link to={`/repocard/${id}`}>{fullName}</Link></p>
      <p><a href={goToRepo()}>link to github</a></p>
      <p>last commit date: {formatedDate}</p>
      <p>&#9734; {stargazersCount}</p>
      {/* <p>[Название репозитория] - full_name</p>
      <p>[кол-во звёзд на github] - stargazers_count</p>
      <p>[дата последнего коммита] - commits_url</p>
      <p>[ссылка на Github] - html_url</p> */}
    </div>
  ) 
};

export default RepoItem;