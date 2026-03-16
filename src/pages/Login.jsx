import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("Student");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">

      <div className="w-full max-w-md border border-gray-800 rounded-2xl p-8 bg-black shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center text-sm mt-2">
          Sign in to your account
        </p>

        {/* Role Selection */}
        <div className="mt-6">
          <p className="text-sm mb-2">Role</p>

          <div className="flex gap-3">

            <button
              onClick={() => setRole("Student")}
              className={`px-4 py-2 rounded-lg border ${role === "Student"
                  ? "bg-white text-black"
                  : "border-gray-700 text-gray-300"
                }`}
            >
              Student
            </button>

            <button
              onClick={() => setRole("Mentor")}
              className={`px-4 py-2 rounded-lg border ${role === "Mentor"
                  ? "bg-white text-black"
                  : "border-gray-700 text-gray-300"
                }`}
            >
              Mentor
            </button>

            <button
              onClick={() => setRole("Admin")}
              className={`px-4 py-2 rounded-lg border ${role === "Admin"
                  ? "bg-white text-black"
                  : "border-gray-700 text-gray-300"
                }`}
            >
              Admin
            </button>

          </div>
        </div>

        {/* UID Input */}
        <div className="mt-6">
          <label className="text-sm">University UID</label>

          <input
            type="text"
            placeholder="Enter your University UID"
            className="w-full mt-2 px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm">Password</label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-2 px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Sign In Button */}
        <button className="w-full mt-6 bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200">
          Sign in
        </button>

        {/* Footer text */}
        <p className="text-gray-500 text-xs text-center mt-4">
          Use your role-based credentials. Contact admin if you need help.
        </p>
      </div>



    </div>
  );
}