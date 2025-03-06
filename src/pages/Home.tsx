import GuestHome from "../components/GuestHome";
import UserHome from "../components/UserHome";
import { useGetUserProfileQuery } from "../services/api";

export default function Home() {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="text-center pt-50 px-4">
      {user ? <UserHome /> : <GuestHome />}
    </div>
  );
}
