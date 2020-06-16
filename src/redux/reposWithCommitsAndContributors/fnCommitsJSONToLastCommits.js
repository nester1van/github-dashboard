export default function fnCommitsJSONToLastCommits(jsonsArr) {
  let lastCommitsArr = jsonsArr.map(commitsArr => {
    let { commit: { author: { date } } } = commitsArr[0];
    return date;
  });
  return lastCommitsArr;
};

