import { useLogoutUserMutation } from "../services/api";

const Logout = () => {
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    await logoutUser({});
    window.location.reload(); // Refresh page to reset auth state
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
