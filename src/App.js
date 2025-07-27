import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!password || password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:8000/api/auth/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password, // or add email if needed
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
  
      alert("Account activated successfully!");
      // Optionally redirect or reset form
    } catch (err) {
      console.error(err);
      alert(err.message || "Activation failed");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Hi Rohit Kumar</h2>
        <p className="text-gray-600 mb-6">
          Before you download Insightful, please create a password for your account.
          You’ll use this password with your email to log into Insightful later.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                👁️
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                👁️
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!password || password !== confirmPassword}
            className={`w-full py-2 rounded-md text-white font-semibold transition-all duration-200 ${
              !password || password !== confirmPassword
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

