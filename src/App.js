import "./App.css"
import UsersList from "./components/UsersList/UsersList.component"
import UserDetails from "./components/UserDetails/UserDetails.component"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<UsersList />}></Route>
        <Route exact path="/users/:userId" element={<UserDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
