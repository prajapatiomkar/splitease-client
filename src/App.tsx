import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Root from "./pages/Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetUserProfileQuery } from "./services/api";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { data: user, isLoading } = useGetUserProfileQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Home />} />
          </Route>
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
