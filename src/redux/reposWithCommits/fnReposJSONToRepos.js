export default function fnReposJSONToRepos(json) {
  let { total_count: totalCount, items } = json; 
  let reposArr = items.map(item => {
    let { id, 
      full_name: fullName, 
      stargazers_count: stargazersCount, 
      html_url: htmlUrl,
      contributors_url: contributorsUrl, 
      owner,
      languages_url: languagesUrl,
      description
    } = item; 
    let { avatar_url: avatarUrl, login, html_url: userUrl } = owner;
    return {id, fullName, stargazersCount, htmlUrl,
            contributorsUrl, avatarUrl, login, 
            userUrl, languagesUrl, description};
  })
  
  return {totalCount, reposArr};
};