// export default function LoginForm() {
//     return (
//       <div className="flex h-screen">
//         {/* Left Side - Logo */}
//         <div className="w-1/2 bg-gray-900 flex items-center justify-center">
//           <h1 className="text-white text-3xl font-bold">Your Logo</h1>
//         </div>
  
//         {/* Right Side - Form */}
//         <div className="w-1/2 flex items-center justify-center">
//           <form className="bg-white p-8 shadow-lg rounded-md w-96">
//             <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
  
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation
import companyLogo from "../assets/companyLogo2.png";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Parent Wrapper */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden min-h-[500px]">
        
        {/* Left Side (Company Logo) */}
        <div className="w-full md:w-1/2 bg-gray-900 flex flex-col items-center justify-center py-6 text-white">
          <img src={companyLogo} alt="Company Logo" className="w-32 md:w-60" />
          <h1 className="text-lg md:text-2xl font-bold mt-2 text-center">Public Undertaking Service</h1>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <form className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password with Visibility Toggle */}
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 focus:outline-none rounded-l"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="px-3 flex items-center bg-gray-200 rounded-r"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">
              Login
            </button>

            {/* Links Below the Login Button */}
            <div className="flex justify-between text-sm text-center mt-4">
              {/* <button className="text-green-600 hover:underline">Login with OTP</button> */}
              <Link to="/login-otp" className="text-blue-600 hover:underline">Login with OTP</Link>
              <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
            </div>

            {/* Register Link - Full Width Below */}
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}

