import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import PlayerDetails from "./pages/PlayerDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* Legacy support: redirect old /Layout paths to /home */}
      <Route path="/Layout/*" element={<Navigate to="/home" replace />} />
      {/* Layout route without a path so children use absolute paths that match Nav links */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/details" element={<PlayerDetails />} />
        <Route path="/notifs" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
