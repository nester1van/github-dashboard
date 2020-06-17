



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

// let json1 = {
//   total_count: 81840,
//   incomplete_results: false,
//   items: [
//   {
//   id: 15062869,
//   node_id: "MDEwOlJlcG9zaXRvcnkxNTA2Mjg2OQ==",
//   name: "jest",
//   full_name: "facebook/jest",
//   private: false,
//   owner: {
//   login: "facebook",
//   id: 69631,
//   node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
//   avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/facebook",
//   html_url: "https://github.com/facebook",
//   followers_url: "https://api.github.com/users/facebook/followers",
//   following_url: "https://api.github.com/users/facebook/following{/other_user}",
//   gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
//   starred_url: "https://api.github.com/users/facebook/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
//   organizations_url: "https://api.github.com/users/facebook/orgs",
//   repos_url: "https://api.github.com/users/facebook/repos",
//   events_url: "https://api.github.com/users/facebook/events{/privacy}",
//   received_events_url: "https://api.github.com/users/facebook/received_events",
//   type: "Organization",
//   site_admin: false
//   },
//   html_url: "https://github.com/facebook/jest",
//   description: "Delightful JavaScript Testing.",
//   fork: false,
//   url: "https://api.github.com/repos/facebook/jest",
//   forks_url: "https://api.github.com/repos/facebook/jest/forks",
//   keys_url: "https://api.github.com/repos/facebook/jest/keys{/key_id}",
//   collaborators_url: "https://api.github.com/repos/facebook/jest/collaborators{/collaborator}",
//   teams_url: "https://api.github.com/repos/facebook/jest/teams",
//   hooks_url: "https://api.github.com/repos/facebook/jest/hooks",
//   issue_events_url: "https://api.github.com/repos/facebook/jest/issues/events{/number}",
//   events_url: "https://api.github.com/repos/facebook/jest/events",
//   assignees_url: "https://api.github.com/repos/facebook/jest/assignees{/user}",
//   branches_url: "https://api.github.com/repos/facebook/jest/branches{/branch}",
//   tags_url: "https://api.github.com/repos/facebook/jest/tags",
//   blobs_url: "https://api.github.com/repos/facebook/jest/git/blobs{/sha}",
//   git_tags_url: "https://api.github.com/repos/facebook/jest/git/tags{/sha}",
//   git_refs_url: "https://api.github.com/repos/facebook/jest/git/refs{/sha}",
//   trees_url: "https://api.github.com/repos/facebook/jest/git/trees{/sha}",
//   statuses_url: "https://api.github.com/repos/facebook/jest/statuses/{sha}",
//   languages_url: "https://api.github.com/repos/facebook/jest/languages",
//   stargazers_url: "https://api.github.com/repos/facebook/jest/stargazers",
//   contributors_url: "https://api.github.com/repos/facebook/jest/contributors",
//   subscribers_url: "https://api.github.com/repos/facebook/jest/subscribers",
//   subscription_url: "https://api.github.com/repos/facebook/jest/subscription",
//   commits_url: "https://api.github.com/repos/facebook/jest/commits{/sha}",
//   git_commits_url: "https://api.github.com/repos/facebook/jest/git/commits{/sha}",
//   comments_url: "https://api.github.com/repos/facebook/jest/comments{/number}",
//   issue_comment_url: "https://api.github.com/repos/facebook/jest/issues/comments{/number}",
//   contents_url: "https://api.github.com/repos/facebook/jest/contents/{+path}",
//   compare_url: "https://api.github.com/repos/facebook/jest/compare/{base}...{head}",
//   merges_url: "https://api.github.com/repos/facebook/jest/merges",
//   archive_url: "https://api.github.com/repos/facebook/jest/{archive_format}{/ref}",
//   downloads_url: "https://api.github.com/repos/facebook/jest/downloads",
//   issues_url: "https://api.github.com/repos/facebook/jest/issues{/number}",
//   pulls_url: "https://api.github.com/repos/facebook/jest/pulls{/number}",
//   milestones_url: "https://api.github.com/repos/facebook/jest/milestones{/number}",
//   notifications_url: "https://api.github.com/repos/facebook/jest/notifications{?since,all,participating}",
//   labels_url: "https://api.github.com/repos/facebook/jest/labels{/name}",
//   releases_url: "https://api.github.com/repos/facebook/jest/releases{/id}",
//   deployments_url: "https://api.github.com/repos/facebook/jest/deployments",
//   created_at: "2013-12-10T00:18:04Z",
//   updated_at: "2020-06-09T13:37:28Z",
//   pushed_at: "2020-06-09T13:24:30Z",
//   git_url: "git://github.com/facebook/jest.git",
//   ssh_url: "git@github.com:facebook/jest.git",
//   clone_url: "https://github.com/facebook/jest.git",
//   svn_url: "https://github.com/facebook/jest",
//   homepage: "https://jestjs.io",
//   size: 207785,
//   stargazers_count: 31315,
//   watchers_count: 31315,
//   language: "TypeScript",
//   has_issues: true,
//   has_projects: true,
//   has_downloads: true,
//   has_wiki: true,
//   has_pages: true,
//   forks_count: 4442,
//   mirror_url: null,
//   archived: false,
//   disabled: false,
//   open_issues_count: 1083,
//   license: {
//   key: "mit",
//   name: "MIT License",
//   spdx_id: "MIT",
//   url: "https://api.github.com/licenses/mit",
//   node_id: "MDc6TGljZW5zZTEz"
//   },
//   forks: 4442,
//   open_issues: 1083,
//   watchers: 31315,
//   default_branch: "master",
//   score: 1
//   }
//   ]
//   };

// console.log(fnReposJSONToRepos(json1));