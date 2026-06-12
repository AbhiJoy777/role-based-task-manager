import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import UserManagement from "./pages/admin/UserManagement";
import TaskMonitoring from "./pages/admin/TaskMonitoring";
import ActivityLogs from "./pages/admin/ActivityLogs";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/tasks" element={<TaskMonitoring />} />
        <Route path="/admin/logs" element={<ActivityLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;