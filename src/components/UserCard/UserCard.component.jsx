import React from "react"
import { useNavigate } from "react-router-dom"
import "./UserCard.styles.scss"

const UserCard = ({ ...user }) => {
  const navigate = useNavigate()

  const toUserDetails = () => {
    navigate(`/users/${user.login.username}`, {
      state: { ...user },
    })
  }
  return (
    <button
      onClick={() => {
        toUserDetails()
      }}
    >
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
    </button>
  )
}

export default UserCard
