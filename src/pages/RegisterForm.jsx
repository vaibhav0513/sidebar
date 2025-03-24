// export default function RegisterForm() {
//     return (
//       <div className="flex h-screen">
//         {/* Left Side - Logo Section */}
//         <div className="w-2/5 bg-gray-900 flex items-center justify-center">
//           <h1 className="text-white text-3xl font-bold">Your Logo</h1>
//         </div>
  
//         {/* Right Side - Form Section with Increased Width */}
//         <div className="w-3/5 flex items-center justify-center">
//           <form className="bg-white p-8 shadow-lg rounded-md w-[600px]">
//             <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
  
//             {/* First Name & Last Name */}
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter first name"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter last name"
//                 />
//               </div>
//             </div>
  
//             {/* Date of Birth & Gender */}
//             <div className="flex space-x-4 mt-4">
//               <div className="w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
//                 <input
//                   type="date"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
//                 <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>
  
//             {/* Mobile Number & Verify Button */}
//             <div className="flex space-x-4 mt-4">
//               <div className="w-2/3">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
//                 <input
//                   type="tel"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter mobile number"
//                 />
//               </div>
//               <div className="w-1/3 flex items-end">
//                 <button
//                   type="button"
//                   className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>
  
//             {/* Email & Password */}
//             <div className="flex space-x-4 mt-4">
//               <div className="w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your password"
//                 />
//               </div>
//             </div>
  
//             {/* Role Selection */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
//               <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">Select Role</option>
//                 <option value="upper">Upper</option>
//                 <option value="middle">Middle</option>
//                 <option value="lower">Lower</option>
//               </select>
//             </div>
  
//             {/* Register Button */}
//             <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
  




// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import companyLogo from "../assets/companyLogo2.png";

// export default function RegisterForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       {/* Parent Wrapper */}
//       <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        
//         {/* Left Side (Company Logo) */}
//         <div className="w-full md:w-1/2 bg-gray-900 flex flex-col items-center justify-center py-6 md:py-0 text-white">
//           <img src={companyLogo} alt="Company Logo" className="w-40 md:w-60" />
//           <h1 className="text-2xl font-bold mb-4 text-center">Public Undertaking Service</h1>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-6">
//           <form className="w-full max-w-md">
//             <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

//             {/* First Name & Last Name */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter first name"/>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter last name"/>
//               </div>
//             </div>

//             {/* Date of Birth & Gender */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
//                 <input type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"/>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
//                 <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>

//             {/* Mobile Number & Role */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//               {/* Mobile Number with OTP Button */}
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
//                 <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
//                   <input type="tel" className="w-full p-2 focus:outline-none rounded-l" placeholder="Enter mobile number"/>
//                   <button type="button" className="bg-green-600 text-white px-3 rounded-r hover:bg-green-700">OTP</button>
//                 </div>
//               </div>

//               {/* Role Selection */}
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
//                 <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select Role</option>
//                   <option value="upper">Upper</option>
//                   <option value="middle">Middle</option>
//                   <option value="lower">Lower</option>
//                 </select>
//               </div>
//             </div>

//             {/* Email & Password */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                 <input type="email" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
//               </div>
//               <div className="w-full md:w-1/2 relative">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
//                   <input type={showPassword ? "text" : "password"} className="w-full p-2 focus:outline-none rounded-l" placeholder="Enter your password"/>
//                   <button type="button" className="px-3 flex items-center bg-gray-200 rounded-r" onClick={() => setShowPassword(!showPassword)}>
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Register Button */}
//             <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">Register</button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import companyLogo from "../assets/companyLogo2.png";

// export default function RegisterForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       {/* Parent Wrapper */}
//       <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        
//         {/* Left Side (Company Logo) */}
//         <div className="w-full md:w-1/2 bg-gray-900 flex flex-col items-center justify-center py-6 md:py-0 text-white">
//           {/* <h1 className="text-2xl font-bold mb-4 text-center">Public Undertaking Service</h1> */}
//           <img src={companyLogo} alt="Company Logo" className="w-40 md:w-60" />
//           <h1 className="text-2xl font-bold mb-4 text-center">Public Undertaking Service</h1>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-6">
//           <form className="w-full max-w-md">
//             <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

//             {/* First Name & Last Name */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter first name"/>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter last name"/>
//               </div>
//             </div>

//             {/* Date of Birth & Gender */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
//                 <input type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"/>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
//                 <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>

//             {/* Mobile Number & Role */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//               {/* Mobile Number with OTP Button */}
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
//                 <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
//                   <input type="tel" className="w-full p-2 focus:outline-none rounded-l" placeholder="Enter mobile no"/>
//                   <button type="button" className="bg-green-600 text-white px-3 rounded-r hover:bg-green-700">OTP</button>
//                 </div>
//               </div>

//               {/* Role Selection */}
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
//                 <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select Role</option>
//                   <option value="upper">Upper</option>
//                   <option value="middle">Middle</option>
//                   <option value="lower">Lower</option>
//                 </select>
//               </div>
//             </div>

//             {/* Email & Password */}
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                 <input type="email" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
//               </div>
//               <div className="w-full md:w-1/2 relative">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
//                   <input type={showPassword ? "text" : "password"} className="w-full p-2 focus:outline-none rounded-l" placeholder="Enter your password"/>
//                   <button type="button" className="px-3 flex items-center bg-gray-200 rounded-r" onClick={() => setShowPassword(!showPassword)}>
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Register Button */}
//             <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">Register</button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation
import companyLogo from "../assets/companyLogo2.png";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 overflow-y-auto">
      {/* Parent Wrapper with Scroll */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden min-h-[500px]">
        
        {/* Left Side (Company Logo) */}
        <div className="w-full md:w-1/2 bg-gray-900 flex flex-col items-center justify-center py-6 text-white min-h-[250px] sm:min-h-[300px]">
          <img src={companyLogo} alt="Company Logo" className="w-32 md:w-60" />
          <h1 className="text-lg md:text-2xl font-bold mt-2 text-center">Public Undertaking Service</h1>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 overflow-y-auto">
          <form className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter first name"/>
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter last name"/>
              </div>
            </div>

            {/* Date of Birth & Gender */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Mobile Number & Role */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              {/* Mobile Number with OTP Button */}
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
                <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
                  <input type="tel" className="w-full p-2 focus:outline-none rounded-l" placeholder="Enter mobile no"/>
                  <button type="button" className="bg-green-600 text-white px-3 rounded-r hover:bg-green-700">OTP</button>
                </div>
              </div>

              {/* Role Selection */}
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Role</option>
                  <option value="upper">Upper</option>
                  <option value="middle">Middle</option>
                  <option value="lower">Lower</option>
                </select>
              </div>
            </div>

            {/* Email & Password */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
              </div>
              <div className="w-full md:w-1/2 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <div className="flex border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
                  <input type={showPassword ? "text" : "password"} className="w-full p-2 focus:outline-none rounded-l" placeholder="Enter your password"/>
                  <button type="button" className="px-3 flex items-center bg-gray-200 rounded-r" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-6">Register</button>

            {/* Already Registered? Login */}
            <p className="text-center text-gray-600 mt-4">
              Already registered?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
