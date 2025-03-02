import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useResetPasswordMutation } from "../services/api";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await resetPassword({ token, newPassword }).unwrap();
      toast.success(response?.message);
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Reset Your Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-900"
            >
              New Password
            </label>
            <div className="mt-2">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? "Resetting" : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
