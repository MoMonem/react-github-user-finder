const DisplayUserData = ({ userData }) => {
  return (
    <div className="col">
      <div className="badges">
        <span className="badge text-bg-primary">
          Public Ripos: {userData.public_repos}
        </span>
        <span className="badge text-bg-secondary">
          Public Gists: {userData.public_gists}
        </span>
        <span className="badge text-bg-success">
          Followers: {userData.followers}
        </span>
        <span className="badge text-bg-info">
          Following: {userData.following}
        </span>
      </div>
      <div className="user-data">
        <ul className="list-group">
          <li className="list-group-item">Name: {userData.name}</li>
          <li className="list-group-item">
            Email:{" "}
            {userData.email === null
              ? "User's email is hidden"
              : userData.email}
          </li>
          <li className="list-group-item">Company: {userData.company}</li>
          <li className="list-group-item">Website: {userData.blog}</li>
          <li className="list-group-item">Location: {userData.location}</li>
          <li className="list-group-item">Bio: {userData.bio}</li>
        </ul>
      </div>
    </div>
  );
};

export default DisplayUserData;
