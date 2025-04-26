import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function Login() {
  // Define form fields using useState
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // Handle input changes dynamically for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update formData with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (
      formData.email === loggeduser.email &&
      formData.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      toast.success("Login Successfully")
      navigate("/profile");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white">
      <div className="flex flex-col w-full max-w-md min-h-screen p-6 bg-[#fbfbfb] rounded-lg shadow-md">
        <h1 className="mb-3 text-3xl font-bold text-left">
          Signin to your PopX account
        </h1>
        <p className="mb-5 text-left text-gray-500 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          beatae.
        </p>
        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          {/* Email Address Field */}
          <div className="relative">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
            />
            <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Email
            </label>
          </div>
          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
            />
            <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Password
            </label>
          </div>
          <button
            variant="primary"
            type="submit"
            className="w-full py-2 cursor-pointer text-white bg-[#9445ee] rounded-md hover:bg-[#6f28c0]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
