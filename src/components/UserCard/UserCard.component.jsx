import React from "react"
import "./UserCard.styles.scss"

const UserCard = ({ ...user }) => {
  return (
    <div className="user-card-container">
      <div className="user-img">
        <img src={user.picture.large} alt="" />
      </div>
      <div className="user-info">
        <div className="user-name">
          {user.name.title} {user.name.first} {user.name.last}
        </div>
        <div className="user-email">{user.email}</div>
      </div>
    </div>
  )
}

export default UserCard
