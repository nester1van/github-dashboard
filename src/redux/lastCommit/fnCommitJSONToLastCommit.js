export default function fnCommitJSONToLastCommit(json) {
  const { commit: { author: { date } } } = json[0];
  return date;
}
