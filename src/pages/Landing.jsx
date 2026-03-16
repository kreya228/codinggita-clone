import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

      {/* Heading */}
      <h1 className="text-6xl font-bold text-center leading-tight">
        Coding <br />
        <span className="text-gray-400">Gita</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-6 text-center max-w-xl">
        Smart, simple, and reliable attendance for modern classrooms.
      </p>

      {/* Login Button */}
      <Link to="/login">
        <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Login
        </button>
      </Link>

      {/* Feature Cards */}
      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl w-full">

        {/* Card 1 */}
        <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-b from-gray-900 to-black">
          <h3 className="text-lg font-semibold mb-2">
            Role-based dashboards
          </h3>

          <p className="text-gray-400">
            Admin, Mentor, and Student experiences tailored to their needs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-b from-gray-900 to-black">
          <h3 className="text-lg font-semibold mb-2">
            Fast and secure access
          </h3>

          <p className="text-gray-400">
            Encrypted sessions and streamlined navigation.
          </p>
        </div>

      </div>

    </div>
  );
}