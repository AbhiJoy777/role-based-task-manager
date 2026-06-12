export default function ProtectedRoute({ children }) {
  const isAuthenticated = true;

  return isAuthenticated ? children : <h1>Please Login</h1>;
}