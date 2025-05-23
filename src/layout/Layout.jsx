import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "../layout/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when a new route is visited (on mobile)
  useEffect(() => {
    if (isMobile) {
      setIsMobileSidebarOpen(false);
    }
  }, [location, isMobile]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Overlay Mode) */}
      {isMobile && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-gray-800 z-50 transition-transform duration-300 
            ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar
            isOpen={isMobileSidebarOpen}
            toggleSidebar={() => setIsMobileSidebarOpen(false)}
            isMobile={true}
          />
        </div>
      )}

      {/* Desktop Sidebar (Fixed) */}
      {!isMobile && (
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isMobile={false}
        />
      )}

      {/* Main Content Area (Adjusts to Sidebar) */}
      <div
        className={`flex flex-1 min-w-0 overflow-auto relative transition-all duration-300 ${
          isMobile ? "w-full" : isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Header toggleMobileSidebar={() => setIsMobileSidebarOpen(true)} />
        <main className="p-6 mt-16 bg-gray-100 min-h-screen w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
