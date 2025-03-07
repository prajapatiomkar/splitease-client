import { Link } from "react-router";
import Logout from "./Logout";
import { useGetUserProfileQuery } from "../services/api";
import { Button } from "./ui/button";

export default function Navbar() {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <nav className="flex justify-between p-4">
      <Link to="/">SplitEase</Link>
      {user ? (
        <>
          <Logout />
        </>
      ) : (
        <ul className="flex gap-4">
          <li>
            <Link to="/login" className="link-button">
              <Button variant="link">Login</Button>
            </Link>
          </li>
          <li>
            <Link to="/register" className="link-button">
              <Button variant="link"> Register</Button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
