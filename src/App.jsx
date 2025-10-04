import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Coach from "./pages/Coach";
import PlayerHome from "./pages/PlayerHome";
import PlayerDetails from "./pages/PlayerDetails";
import PlayerComparisonCard from './pages/PlayerComparisonCard'
import Note from './pages/Note'
import League from "./pages/League";


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
        <Route path="/comparison" element={<PlayerComparisonCard />} />
        <Route path="/notifs" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/playerHome" element={<PlayerHome />} />
        <Route path="/note" element={<Note />} />
        <Route path="/league" element={<League />} />
      </Route>
    </Routes>
  );
}

export default App;
