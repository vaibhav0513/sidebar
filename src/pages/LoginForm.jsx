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
  

export default function LoginForm() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* Parent Wrapper */}
      <div className="flex w-3/4 h-3/4 shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Logo */}
        <div className="w-1/2 bg-gray-900 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Your Logo</h1>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <form className="p-8 shadow-md rounded-md w-96">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
