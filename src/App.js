import Nav from "./components/nav";
import DisplayUser from "./components/displayUser";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  function handleRequest(e) {
    e.preventDefault();

    // Request user's data from the github api
    fetch(`https://api.github.com/users/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));

    // Request user's repos from the github api
    fetch(
      `https://api.github.com/users/${e.target.value}/repos?per_page=5&sort=created:asc`
    )
      .then((res) => res.json())
      .then((data) => setUserRepos(data));
  }

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="search-section  border rounded-2 p-4">
          <h2 className="text-secondary fs-4 mb-3">
            Enter a username to fetch data from Github
          </h2>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onKeyUp={(e) => handleRequest(e)}
            />
          </div>
        </div>
        {!userData.id ? (
          <div className="container">
            <p className="fs-5 m-5 text-center">
              You didn't fetch any user's data yet
            </p>
          </div>
        ) : (
          <DisplayUser userData={userData} userRepos={userRepos} />
        )}
      </div>
    </div>
  );
}

export default App;
