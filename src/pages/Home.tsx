import { useGetUserProfileQuery } from "../services/api";

export default function Home() {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="text-center pt-50 px-4">
      {user ? (
        // Authenticated User Home
        <>
          <div className="text-5xl">Welcome, {user.name}!</div>
          <div className="mt-5 text-xl">Manage your expenses easily.</div>
        </>
      ) : (
        // Public Home Page
        <>
          <div className="text-5xl">SplitEase</div>
          <div className="mt-5 text-xl capitalize">
            Simplifies splitting bills and expenses, making group payments
            quick, fair, and hassle-free.
          </div>
        </>
      )}
    </div>
  );
}
