import DisplayUserData from "./displayUserData";
import DisplayUserRepos from "./displayUserRepos";

const DisplayUser = ({ userData, userRepos }) => {
  function openUserProfile() {
    window.open(userData.html_url);
  }

  return (
    <div className="container">
      <div className="border rounded-2 p-4 my-3 row">
        <div className="col">
          <img
            src={userData.avatar_url}
            alt="user avatar"
            className="img-fluid"
          />
          <div className="d-grid gap-2 mt-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={openUserProfile}
            >
              Visit Profile
            </button>
          </div>
        </div>
        <DisplayUserData userData={userData} />
      </div>
      <DisplayUserRepos userRepos={userRepos} />
    </div>
  );
};

export default DisplayUser;
