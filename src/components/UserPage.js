import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Repos from "./Repos";

const UserPage = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.id}`)
      .then((res) => setUser(res.data));
  }, [params.id]);

  return (
    <div className="singleUserPage">
      <div className="buttonWrapper">
        <Link to="/" className="backToSearchButton">
          Back To Search
        </Link>
        <p className="hireAble">
          hireable:{" "}
          <i className={user.hireable ? "fas fa-check" : "fas fa-times"}></i>{" "}
        </p>
      </div>

      <div className="singleUserCard">
        <img src={user.avatar_url} alt="userImage" />
        <p className="singleUserName">{user.name}</p>
        <p className="singleUserLocation">{user.location}</p>
        <h3>Bio:</h3>
        <p className="singleUserBio">{user.bio}</p>
        <a href={user.html_url} className="githubButton">
          Visit Github Page
        </a>
        <p className="singleUserLogin">Login : {user.login}</p>
        <p className="singleUserWeb">Website : {user.blog}</p>
      </div>
      <div className="userInfo">
        <div className="follower">Follower: {user.followers}</div>
        <div className="following">Following: {user.following}</div>
        <div className="repos">Public Repos: {user.public_repos}</div>
        <div className="gits">Public Gists: {user.public_gists}</div>
      </div>
      <Repos />
    </div>
  );
};

export default UserPage;
