import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  // useEffect runs when component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]); // Dependency array contains navigate to avoid stale closure issues

  // Handle Logout Function
  const handleLogout = () => {
    localStorage.removeItem("loggedin"); // Remove login status (assuming "loggedin" key exists)
    navigate("/login");
  };

  // Handle Profile Picture Update
  const updateProfilePic = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read image file
      reader.onloadend = () => {
        const updatedUser = { ...userData, profilePic: reader.result }; // Update userData with new profilePic
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        setUserData(updatedUser);
      };
      reader.readAsDataURL(file); // Read file as a base64 encoded URL
    }
  };

  return (
    <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white">
    
      <div className="flex flex-col w-full max-w-md min-h-screen bg-[#fbfbfb] shadow-md">
       
        <div className="flex justify-between items-center p-4 bg-white">
          <h1 className="text-2xl font-bold text-left">Account Settings</h1>
          <Link to="/"
           
            className="px-3 py-1 text-sm cursor-pointer text-white bg-blue-500 rounded"
          >
           Home
          </Link>
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-sm cursor-pointer text-white bg-red-500 rounded"
          >
            Logout
          </button>
        </div>

        {/* Profile Picture and Basic Info Section */}
        <div className="flex items-center gap-4 p-4">
          <div className="relative">
            {/* Label acts as clickable area for uploading profile pic */}
            <label htmlFor="upload" className="cursor-pointer">
              <img
                src={userData?.profilePic}
                alt="Profile"
                className="object-cover w-24 h-24 border-2 border-gray-300 rounded-full"
              />
              {/* Camera Icon for Profile Upload */}
              <span className="absolute bottom-0 right-0 p-2 bg-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
                </svg>
              </span>
            </label>

            {/* Hidden file input */}
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={updateProfilePic}
              accept="image/*"
            />
          </div>

          {/* Display Name, Email, and Company Info */}
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold">
              {userData?.fullName || "No Name"}
            </h3>
            <p className="text-sm text-gray-500">
              Email: {userData?.email || "No Email"}
            </p>
            <p className="text-sm text-gray-500">
              Company: {userData?.company || "No Company"}
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-4 mt-6 text-left">
          <h2 className="font-semibold text-purple-500">Bio Section</h2>
          <p className="text-gray-500 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod
            consectetur? Animi adipisci dicta modi itaque, praesentium illo hic
            est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
