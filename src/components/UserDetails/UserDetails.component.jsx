import React from "react"

const UserDetails = ({ ...user }) => {
  console.log("user", user)
  return (
    <div>
      <h1>UserDetails</h1>
    </div>
  )
}

export default UserDetails
