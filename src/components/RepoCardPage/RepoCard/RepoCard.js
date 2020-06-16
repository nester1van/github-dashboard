import React from 'react';

const RepoCard = () => {
  return (
    <>
      <p>[Название репозитория] - full_name</p>
      <p>[кол-во звёзд на github] - stargazers_count</p>
      <p>[дата последнего коммита] - commits_url</p>
      <p>[Nickname владельца репозитория с ссылкой на него] - owner.login, owner.url</p>
      <p>[Список используемых языков в репозитории] - languages_url</p>
      <p>[Краткое описание репозитория] - description</p>
      <p>[10 наиболее активных контрибьютеров] - contributors_url</p>
    </>
  )
};

export default RepoCard;