import { useEffect, useState } from "react"
import { loadUsers } from "../../actions/index"
import { useSelector, useDispatch } from "react-redux"
import UserCard from "../UserCard/UserCard.component"
import Spinner from "../Spinner/Spinner.component"
import { ReactComponent as SearchIcon } from "../../assets/search.svg"
import "./UserList.styles.scss"

function UsersList() {
  const dispatch = useDispatch()
  const usersList = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)
  const error = useSelector((state) => state.users.error)
  const [users, setUsers] = useState(usersList)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])

  //UI filtering
  useEffect(() => {
    const filteredUsers = usersList?.filter((user) =>
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setUsers(filteredUsers)
  }, [searchTerm, usersList])

  if (loading) {
    return <div>{loading && <Spinner />}</div>
  }

  return (
    <div className="homepage-container">
      <div className="search-user">
        <input
          placeholder="Search by firstname"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon className="search-icon" width="30px" height="30px" />
      </div>
      <div className="user-list-container">
        {error && !loading && <h2>{error}</h2>}
        {users && users.map((user, i) => <UserCard key={i} {...user} />)}
      </div>
    </div>
  )
}

export default UsersList
