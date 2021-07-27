import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="user">
        <img src={user.avatar_url} alt="userImage" />
        <p>{user.login}</p>

        <Link to={`/user/${user.login}`} className="moreButton">
          More
        </Link>
      </div>
    </>
  );
};

export default UserCard;
