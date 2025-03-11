import React from "react";
import "./UserCard.css";
import "./FormatDate";
import FormatDate from "./FormatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLink,
  faBuilding,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
interface UserCardProps {
  user: {
    avatar_url: string;
    login: string;
    name: string;
    created_at: string;
    bio: string;
    followers: number;
    following: number;
    location: string;
    twitterUsername: string;
    blog_post: string;
    company: string;
    public_repos: number;
  };
}

// const UserCard: React.FC<UserCardProps> = ({ user }) => {
//   return (
//     <div className="user-card">
//       <img src={user.avatar_url} alt={user.login} />
//       <h1>{user.name }</h1>
//       <p className="date">Joined: {FormatDate(user.created_at)}</p>
//       <h3>{user.login}</h3>
//       <p className="bio">{user.bio || "No bio available"}</p>
//       <p>Followers: {user.followers}</p>
//       <p>Repositories: {user.public_repos}</p>
//     </div>
//   );
// };

// export default UserCard;

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="position">
      <div className="user-card">
        {/* First row with image, name, and joined date */}

        <div className="top-row">
          <img src={user.avatar_url} alt={user.login} />
          {/* <div className="details"> */}
          <h1>{user.name}</h1>
          <p className="date">Joined: {FormatDate(user.created_at)}</p>
          {/* </div> */}
        </div>

        {/* Second row with bio, followers, and repos */}
        <div className="bottom-row">
          <h3>&#64;{user.login}</h3>
          <p className="bio"> {user.bio || "No bio available"}</p>
          <div className="details">
            <div className="followers">
              <div className="repos">
                <p>Repos</p>
                <p className="respond">{user.public_repos}</p>
              </div>
              <div className="follows">
                <p>Followers</p>
                <p className="respond">{user.followers}</p>
              </div>
              <div className="following">
                <p>Following</p>
                <p className="respond">{user.following}</p>
              </div>
            </div>
            <div className="location">
              <div className="ups">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="icons" />
                  <span>{user.location || "Not Availabe"}</span>
                </p>
                {/* <a
                  href={`https://twitter.com/${twitterUsername}`}
                  target="_blank"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                > */}

                {/* <span>@{twitterUsername}</span> */}
                {/* </a> */}
                <p>
                  <FontAwesomeIcon icon={faTwitter} className="icons" />
                  {user.twitterUsername || "Not Availabe"}
                </p>
              </div>
              <div className="down">
                <p>
                  <FontAwesomeIcon icon={faLink} className="icons" />
                  {user.blog_post || (
                    <a target="_blank" href="https://github.blog">
                      https://github.blog
                    </a>
                  )}
                </p>
                <p>
                  {/* {" "} */}
                  <FontAwesomeIcon icon={faBuilding} className="icons" />
                  {user.company || "No company"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
