import { useGetUserProfileQuery } from "../services/api";

export default function UserHome() {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  return (
    <>
      <div className="text-5xl">Welcome, {user.user.name}!</div>
      <div className="mt-5 text-xl">Manage your expenses easily.</div>
    </>
  );
}
