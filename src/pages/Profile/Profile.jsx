import React, { useState } from "react";
import { Pencil, Eye, EyeOff } from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "Nicholas",
    email: "Nicholas@gmail.com",
    phone: "+91 93849921212",
    street: "Street",
    city: "City",
    country: "Country",
    state: "State",
    zip: "Zip",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    
  };

  const handleSavePassword = () => {
    
    console.log(passwordData);
  };

  return (
    <div className="flex-1 bg-[#f1f3ff] p-6 min-h-screen">
      <div className="max-w-[720px] w-full">
        <h1 className="text-3xl font-bold mb-4">
          {activeTab === "profile" ? "Profile" : "Change Password"}
        </h1>

        {}
        <div className="flex space-x-6 mb-6 border-b border-gray-300 text-sm font-medium">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-2 ${
              activeTab === "profile"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-2 ${
              activeTab === "password"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Change Password
          </button>
        </div>

        {}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          {activeTab === "profile" ? (
            <>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  {}
                  <div>
                    <h2 className="text-2xl font-bold">Name</h2>
                    <p className="text-gray-400">Ed-0012</p>
                  </div>
                </div>

                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center text-sm px-3 py-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                ) : (
                  <div className="space-x-2 flex text-sm">
                    <button
                      onClick={handleSaveProfile}
                      className="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
                {[
                  { label: "Username", field: "username" },
                  { label: "City", field: "city" },
                  { label: "Email Address", field: "email" },
                  { label: "Country", field: "country" },
                  { label: "Phone Number", field: "phone" },
                  { label: "Street", field: "street" },
                  { label: "State", field: "state" },
                  { label: "Zip", field: "zip" },
                ].map(({ label, field }) => (
                  <div key={field} className="flex">
                    <p className="w-40 font-medium text-black">{label}</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData[field]}
                        onChange={(e) =>
                          handleProfileChange(field, e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50"
                      />
                    ) : (
                      <p className="text-gray-800">{profileData[field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {[
                { label: "Change Password", field: "currentPassword" },
                { label: "New Password", field: "newPassword" },
                { label: "Confirm New Password", field: "confirmPassword" },
              ].map(({ label, field }) => (
                <div key={field} className="mb-4">
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    {label}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword[field.replace("Password", "").toLowerCase()] ? "text" : "password"}
                      value={passwordData[field]}
                      onChange={(e) =>
                        handlePasswordChange(field, e.target.value)
                      }
                      placeholder={label}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        togglePassword(field.replace("Password", "").toLowerCase())
                      }
                      className="absolute right-2 top-2.5 text-gray-600"
                    >
                      {showPassword[field.replace("Password", "").toLowerCase()] ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}

              {}
              <div className="flex justify-end space-x-3 mt-6">
                <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                  Cancel
                </button>
                <button
                  onClick={handleSavePassword}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
