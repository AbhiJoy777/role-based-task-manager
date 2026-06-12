export default function AdminRoute({ children }) {
  const isAdmin = true;

  return isAdmin ? children : <h1>Unauthorized</h1>;
}