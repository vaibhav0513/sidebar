import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/RegisterForm";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (No Sidebar & Header) */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (With Sidebar & Header) */}
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
