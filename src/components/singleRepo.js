import React from "react";

const SingleRepo = ({ repoData }) => {
  return (
    <div className="border rounded-2 p-4 my-3">
      <div className="repo-item row">
        <div className="repo-name col">
          <a href={repoData.html_url} target="_blank">
            {repoData.name}
          </a>
        </div>
        <div className="repo-data col">
          <span className="badge text-bg-primary mx-2">
            Stars: {repoData.stargazers_count}
          </span>
          <span className="badge text-bg-secondary mx-2">
            Watchers: {repoData.watchers}
          </span>
          <span className="badge text-bg-success mx-2">
            Forks: {repoData.forks}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleRepo;
