import React from "react"
import { useLocation } from "react-router-dom"
import "./UserDetails.styles.scss"

const UserDetails = () => {
  const { state: user } = useLocation()
  return (
    <div className="user-details-container">
      <div className="user-img">
        <img src={user.picture.large} alt={user.login.username} />
      </div>
      <p className="user-name">
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <p className="user-email">{user.email}</p>
      <p>
        {user.location.street.number} {user.location.street.name}{" "}
        {user.location.city} {user.location.state} {user.location.postcode}{" "}
        {user.location.country} {user.location.coordinates.latitude}{" "}
        {user.location.coordinates.longitude}
      </p>
      <p>
        DOB: {new Date(user.dob.date).getDate()}/
        {new Date(user.dob.date).getMonth()}/
        {new Date(user.dob.date).getFullYear()} | {user.dob.age} years old
      </p>
      <p>Phone No. {user.phone}</p>
    </div>
  )
}

export default UserDetails
