import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Settings, BookOpen } from "lucide-react";
import {
  ChevronRight,
  Package,
  FileText,
  BarChart,
  ClipboardList,
  CalendarCheck,
  ChevronLeft,
  LogOut,
  Clock,
} from "lucide-react";
import LogoutModal from "../components/LogoutModal";

export default function Sidebar({ isOpen, toggleSidebar, isMobile }) {
  const location = useLocation();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Package", path: "/package", icon: Package },
    { name: "Assessment", path: "/language", icon: FileText },
    { name: "Summary", path: "/summary", icon: BarChart },
    { name: "Report", path: "/report", icon: ClipboardList },
    { name: "Book Session", path: "/book-session", icon: Clock },
    {
      name: "Session Management",
      path: "/session-management",
      icon: CalendarCheck,
    },
    { name: "Profile Setting", path: "/profile-setting", icon: Settings },
  ];

  const handleMenuItemClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div
        className={`bg-gray-800 text-white fixed top-0 left-0 h-full transition-all duration-300 shadow-lg z-50
        ${isMobile ? "w-64 left-0" : isOpen ? "w-64 left-0" : "w-16 left-0"}
        ${isMobile && !isOpen ? "hidden" : ""}
        ${!isMobile && !isOpen ? "w-16" : ""}`}
      >
        <div className="p-4 flex justify-between items-center">
          {isOpen && (
            <span className="text-lg font-semibold hidden md:block">
              App Name
            </span>
          )}
        </div>

        {/* Menu Items */}
        <ul className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name} className="mb-1 relative group">
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-md transition-all duration-300 
            ${
              isActive
                ? "bg-gray-700 text-yellow-400 border-l-4 border-yellow-400"
                : "hover:bg-gray-700 hover:ml-2"
            }
          `}
                  onClick={handleMenuItemClick}
                >
                  <Icon size={24} />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout Button */}
        <button
          onClick={() => setIsLogoutOpen(true)}
          className="flex items-center justify-center my-4 p-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-all duration-300 w-full"
        >
          <LogOut size={24} />
          {isOpen && <span className="ml-3">Logout</span>}
        </button>

        {/* ChevronLeft Icon at the Bottom */}
        {!isMobile && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={toggleSidebar}
              className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-lg border border-gray-500"
            >
              {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>
          </div>
        )}
      </div>

      <LogoutModal
        open={isLogoutOpen}
        handleClose={() => setIsLogoutOpen(false)}
      />
    </>
  );
}

