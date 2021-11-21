import { useEffect } from "react"
import { loadUsers } from "../../actions/index"
import { useSelector, useDispatch } from "react-redux"
import UserCard from "../UserCard/UserCard.component"
import Spinner from "../Spinner/Spinner.component"
import "./UserList.styles.scss"

function UsersList() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)
  const error = useSelector((state) => state.users.error)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  if (loading) {
    return <div>{loading && <Spinner />}</div>
  }
  return (
    <div className="user-list-container">
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <UserCard key={i} {...user} />)}
    </div>
  )
}

export default UsersList
