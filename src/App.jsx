
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import RegisterForm from "./pages/RegisterForm";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import LoginWithOTPForm from "./pages/LoginWithOTPForm";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationProvider";
import Package from "./pages/Package";
import Language from "./pages/Language";
import Instructions from "./pages/Instructions";
import AssessmentComponent from "./pages/Assessment";
import Summary from "./pages/Summary";
import SessionManagement from "./pages/SessionManagement";
import Setting from "./pages/Setting";
import BookSession from "./pages/BookSession";
import Report from "./pages/Report";

export default function App() {
  return (
    <Router>
      <AuthProvider>
      <NotificationProvider> {/* Wrap the entire app */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/login-otp" element={<LoginWithOTPForm />} />

          {/* Protected Routes (With Sidebar & Header) */}
          <Route path="/*" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="package" element={<Package />} /> 
            <Route path="language" element={<Language />} /> 
            <Route path="instructions" element={<Instructions />} /> 
            <Route path="assessment" element={<AssessmentComponent />} /> 
            <Route path="summary" element={<Summary />} />
            <Route path="report" element={<Report />} />
            <Route path="book-session" element={<BookSession />} /> 
            {/* <Route path="book-session" element={<Assessment />} />  */}
            <Route path="session-management" element={<SessionManagement />} /> 
            <Route path="profile-setting" element={<Setting />} />
          </Route>
        </Routes>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}
