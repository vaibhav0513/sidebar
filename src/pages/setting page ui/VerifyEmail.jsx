import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext";

const VerifyEmail = () => {
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const { updateUserVerification } = useAuth();

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const userData = JSON.parse(storedData);
      setEmail(userData.email);
      if (userData.isVerified === true) {
        setIsVerified(true);
      }
    }
  }, []);

  const handleVerifyClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/api/notification/otp/send-email-otp`, { email });
      if (response.status === 200) {
        toast.success("OTP sent to your Email!", { autoClose: 2000 });
        setIsModalOpen(true);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      toast.warning("Please enter a valid 6-digit OTP.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/api/notification/otp/verify-email-otp`, { email, otp, panel_name: "psu" });
      if (response.data.success) {
        setIsVerified(true);
        updateUserVerification();
        const userData = JSON.parse(localStorage.getItem("user"));
        userData.isVerified = true;
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Email verified successfully!");
        handleCloseModal();
      } else {
        toast.error(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Verification failed. Please check the OTP and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOtp("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-3">Verify Your Email</h2>
      <p className="text-gray-700 text-center mb-4">
        Your registered email is: <br /> <strong>{email || "No email found"}</strong>
      </p>

      {isVerified ? (
        <div className="flex items-center text-green-600">
          <FaCheckCircle className="text-2xl mr-2" />
          <span>You have verified your Email.</span>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300"
          onClick={handleVerifyClick}
          disabled={loading || isVerified}
        >
          {loading ? "Sending..." : "Verify Email"}
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-2">Verify OTP</h3>
            <p className="text-sm text-gray-600 mb-3">Enter the 6-digit OTP sent to your email:</p>
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded-lg mb-3"
              disabled={loading || isVerified}
            />
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500" onClick={handleCloseModal} disabled={loading || isVerified}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleOtpSubmit} disabled={loading || isVerified}>{loading ? "Verifying..." : "Verify OTP"}</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default VerifyEmail;