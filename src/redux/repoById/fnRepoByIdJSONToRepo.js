export default function fnRepoById(json) {
    let {
      full_name: fullName, 
      stargazers_count: stargazersCount, 
      html_url: htmlUrl,
      contributors_url: contributorsUrl, 
      owner,
      languages_url: languagesUrl,
      description
    } = json;
    let { avatar_url: avatarUrl, login, html_url: userUrl } = owner;
    return {fullName, stargazersCount, htmlUrl,
            contributorsUrl, avatarUrl, login, 
            userUrl, languagesUrl, description};
};