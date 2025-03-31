import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { useAuth } from "../../context/AuthContext";
import { FaInfoCircle, FaUserEdit, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoComponent = () => {
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const fileInputRef = useRef(null);
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { user, updateUserProfile } = useAuth();

  useEffect(() => {
    if (user) {
      setProfileData(user);
    }
  }, [user]);

  const handleEditProfileImg = () => fileInputRef.current.click();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPG or PNG).");
      return;
    }
    try {
      const options = {
        maxSizeMB: 0.05,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile =
        file.size > 50 * 1024 ? await imageCompression(file, options) : file;
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(compressedFile);
      const formData = new FormData();
      formData.append("profile_picture", compressedFile);
      formData.append("userId", user.userId);
      const response = await axios.post(
        `${apiUrl}/profile/uploadProfilePicture`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.filePath) {
        const updatedProfileData = {
          ...profileData,
          profile_picture: response.data.filePath,
        };
        setProfileData(updatedProfileData);
        localStorage.setItem("user", JSON.stringify(updatedProfileData));
        updateUserProfile({ profile_picture: response.data.filePath });
        toast.success("Profile picture updated successfully!");
      }
    } catch (error) {
      toast.error("An error occurred while uploading the profile picture.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          {user?.profile_picture || selectedImage ? (
            <img
              src={selectedImage || `${apiUrl}/${user?.profile_picture}`}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-blue-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-full text-gray-700 text-4xl">
              <FaUserEdit />
            </div>
          )}
          <button
            className="absolute bottom-0 right-0 bg-yellow-600 text-white p-2 rounded-full shadow-md hover:bg-yellow-700"
            onClick={handleEditProfileImg}
          >
            <FaUserEdit />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold">
          {profileData?.first_name} {profileData?.last_name}
        </h2>
        <p className="text-gray-500">{profileData?.email}</p>
      </div>
      <button
        className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
        onClick={() => setIsModalOpen(true)}
      >
        Edit Profile
      </button>
      {isModalOpen && (
        <EditProfileModal
          profileData={profileData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        theme="light"
      />
    </div>
  );
};

const EditProfileModal = ({ profileData, onClose }) => {
  const [formData, setFormData] = useState(profileData);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="w-full mb-2 p-2 border rounded"
            value={formData.first_name || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="w-full mb-2 p-2 border rounded"
            value={formData.last_name || ""}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-2 p-2 border rounded"
            value={formData.email || ""}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoComponent;
