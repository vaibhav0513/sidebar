export default function RegisterForm() {
    return (
      <div className="flex h-screen">
        {/* Left Side - Logo Section */}
        <div className="w-2/5 bg-gray-900 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Your Logo</h1>
        </div>
  
        {/* Right Side - Form Section with Increased Width */}
        <div className="w-3/5 flex items-center justify-center">
          <form className="bg-white p-8 shadow-lg rounded-md w-[600px]">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
  
            {/* First Name & Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter first name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter last name"
                />
              </div>
            </div>
  
            {/* Date of Birth & Gender */}
            <div className="flex space-x-4 mt-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
  
            {/* Mobile Number & Verify Button */}
            <div className="flex space-x-4 mt-4">
              <div className="w-2/3">
                <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="w-1/3 flex items-end">
                <button
                  type="button"
                  className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                >
                  Verify
                </button>
              </div>
            </div>
  
            {/* Email & Password */}
            <div className="flex space-x-4 mt-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>
  
            {/* Role Selection */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Role</option>
                <option value="upper">Upper</option>
                <option value="middle">Middle</option>
                <option value="lower">Lower</option>
              </select>
            </div>
  
            {/* Register Button */}
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
  