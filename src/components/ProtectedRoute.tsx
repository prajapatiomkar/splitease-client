import { Navigate, Outlet } from "react-router";
import { useGetUserProfileQuery } from "../services/api";

const ProtectedRoute = () => {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  if (isLoading) return <p>Loading...</p>;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
