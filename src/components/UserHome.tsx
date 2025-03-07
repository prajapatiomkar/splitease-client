import { MoveRight } from "lucide-react";
import { useGetUserProfileQuery } from "../services/api";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

export default function UserHome() {
  const { data: user } = useGetUserProfileQuery({});
  const navigate = useNavigate();
  return (
    <>
      <div className="text-5xl">Welcome, {user.user.name}!</div>
      <div className="mt-5 text-xl">Manage your expenses easily.</div>
      <Button
        variant="outline"
        className="mt-5"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard <MoveRight />
      </Button>
    </>
  );
}
