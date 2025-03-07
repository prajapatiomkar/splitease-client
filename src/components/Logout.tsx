import { useLogoutUserMutation } from "../services/api";
import { Button } from "./ui/button";

const Logout = () => {
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    await logoutUser({});
    window.location.reload(); // Refresh page to reset auth state
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
