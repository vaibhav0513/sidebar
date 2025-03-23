import { Bell, User } from "lucide-react";

export default function Header({ isOpen }) {
  return (
    <header
      className={`bg-gray-900 text-white p-4 fixed top-0 right-0 h-16 flex justify-between items-center transition-all duration-300 shadow-md ${
        isOpen ? "w-[calc(100%-16rem)]" : "w-[calc(100%-4rem)]"
      }`}
    >
      {/* Left Side: Title */}
      <h1 className="text-lg font-semibold">Ollato Mind Mapping Program</h1>

      {/* Right Side: User Info & Notification */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <button className="relative">
          <Bell size={24} className="text-gray-300 hover:text-white transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
        </button>

        {/* User Profile - Hide username when sidebar is collapsed */}
        <div className="flex items-center space-x-2">
          <User size={24} className="text-gray-300" />
          {isOpen && <span className="text-sm font-medium">John Doe</span>}
        </div>
      </div>
    </header>
  );
}
