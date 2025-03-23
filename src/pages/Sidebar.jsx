// import { Link } from "react-router-dom";
// import { Menu, X, Home, Settings, User } from "lucide-react";

// export default function Sidebar({ isOpen, toggleSidebar }) {
//   return (
//     <div
//       className={`bg-gray-800 text-white h-screen fixed left-0 top-0 transition-all duration-300 ${
//         isOpen ? "w-64" : "w-16"
//       } flex flex-col shadow-lg`}
//     >
//       {/* Sidebar Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="text-white p-3 hover:bg-gray-700 flex items-center justify-center"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar Menu */}
//       <ul className="flex-1 mt-4">
//         <li className="p-3 hover:bg-gray-700 rounded flex items-center">
//           <Link to="/dashboard" className="flex items-center w-full">
//             <Home size={24} />
//             {isOpen && <span className="ml-3">Dashboard</span>}
//           </Link>
//         </li>
//         <li className="p-3 hover:bg-gray-700 rounded flex items-center">
//           <Link to="/settings" className="flex items-center w-full">
//             <Settings size={24} />
//             {isOpen && <span className="ml-3">Settings</span>}
//           </Link>
//         </li>
//         <li className="p-3 hover:bg-gray-700 rounded flex items-center">
//           <Link to="/profile" className="flex items-center w-full">
//             <User size={24} />
//             {isOpen && <span className="ml-3">Profile</span>}
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Package, FileText, BarChart, ClipboardList, CalendarCheck, Settings, User } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  
  // Sidebar items
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={24} /> },
    { name: "Package", path: "/package", icon: <Package size={24} /> },
    { name: "Assessment", path: "/assessment", icon: <FileText size={24} /> },
    { name: "Summary", path: "/summary", icon: <BarChart size={24} /> },
    { name: "Report", path: "/report", icon: <ClipboardList size={24} /> },
    { name: "Book Session", path: "/book-session", icon: <CalendarCheck size={24} /> },
    { name: "Session Management", path: "/session-management", icon: <CalendarCheck size={24} /> },
    { name: "Profile Setting", path: "/profile-setting", icon: <Settings size={24} /> },
  ];

  return (
    <div
      className={`bg-gray-800 text-white h-screen fixed left-0 top-0 transition-all duration-300 shadow-lg ${
        isOpen ? "w-64" : "w-16"
      } flex flex-col`}
    >
      {/* Sidebar Toggle Button */}
      <button
  onClick={toggleSidebar}
  className="text-white p-4 rounded-md hover:bg-gray-700 flex items-center justify-center transition duration-300"
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

{/* <Header isOpen={isOpen} /> */}

      {/* Sidebar Menu */}
      <ul className="flex-1 mt-4">
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            <Link
              to={item.path}
              className={`flex items-center p-3 rounded transition-all duration-200 w-full 
                ${
                  location.pathname === item.path
                    ? "bg-gray-700 text-yellow-400"
                    : "hover:bg-gray-700"
                }`}
            >
              {item.icon}
              {isOpen && <span className="ml-3">{item.name}</span>}
            </Link>

            {/* Tooltip on hover when collapsed */}
            {!isOpen && (
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                {item.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
