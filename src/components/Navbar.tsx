import { Link } from "react-router";
import Logout from "./Logout";
import { useGetUserProfileQuery } from "../services/api";

export default function Navbar() {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <nav className="flex justify-between p-4">
      <Link to="/">Logo</Link>
      {user ? (
        <>
          <span>Welcome, {user?.user.name}!</span>
          <Logout />
        </>
      ) : (
        <ul className="flex gap-4">
          <li>
            <Link to="/login" className="link-button">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="link-button">
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
