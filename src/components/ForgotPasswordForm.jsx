import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/companyLogo2.png";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden min-h-[500px]">
        
        {/* Left Side - Company Logo */}
        <div className="w-full md:w-1/2 bg-gray-900 flex flex-col items-center justify-center py-6 text-white">
          <img src={companyLogo} alt="Company Logo" className="w-32 md:w-60" />
          <h1 className="text-lg md:text-2xl font-bold mt-2 text-center">Public Undertaking Service</h1>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <form className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h2>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Reset Password Button */}
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">
              Reset Password
            </button>

            {/* Back to Login */}
            <p className="text-center text-gray-600 mt-4">
              Remembered your password?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
