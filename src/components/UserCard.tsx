import React from "react";
import './UserCard.css';
import './FormatDate';
import FormatDate from "./FormatDate";

interface UserCardProps {
  user: {
    avatar_url: string;
    login: string;
    name: string;
    created_at: string;
    bio: string;
    followers: number;
    public_repos: number;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h1>{user.name }</h1> 
      <p className="date">Joined: {FormatDate(user.created_at)}</p>
      <h3>{user.login}</h3>
      <p className="bio">{user.bio || "No bio available"}</p>
      <p>Followers: {user.followers}</p>
      <p>Repositories: {user.public_repos}</p>
    </div>
  );
};

export default UserCard;
