export default function fnContributorsJSONToMostActiveContributors(jsonArr) {
  let mostAcitveContributorsArr = jsonArr.map(contributor => {
    return contributor.login;
  });
  return mostAcitveContributorsArr.splice(0, 10);
};
