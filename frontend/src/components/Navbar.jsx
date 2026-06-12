import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link to="/">Login</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/admin/users">Users</Link>

      <Link to="/admin/tasks">Tasks</Link>

      <Link to="/admin/logs">Logs</Link>
    </nav>
  );
}