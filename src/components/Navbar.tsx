import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link to="/">Logo</Link>
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
    </nav>
  );
}
