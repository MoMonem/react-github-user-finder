import SingleRepo from "./singleRepo";

const DisplayUserRepos = ({ userRepos }) => {
  // console.log(userRepos);

  function constructRepos(repos) {
    return;
    // for (let i of repos) {
    //   return <SingleRepo repoData={i} />;
    // }
  }

  return (
    <div className="col">
      <h3 className="text-secondary fs-4">Recent Repos</h3>
      {userRepos.map((repo) => (
        <SingleRepo repoData={repo} />
      ))}
    </div>
  );
};

export default DisplayUserRepos;
