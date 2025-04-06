import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Public from "./components/Public"
import Login from "./featueres/auth/Login"
import DashLayout from './components/DashLayout'
import Welcome from "./featueres/auth/Welcome"
import NotesList from "./featueres/notes/NotesList"
import UsersList from "./featueres/users/UsersList"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>
          <Route path="Users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
