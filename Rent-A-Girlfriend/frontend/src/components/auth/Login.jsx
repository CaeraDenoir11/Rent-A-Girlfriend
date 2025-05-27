import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempt with:", formData);
  };

  return (
    // Full screen container with responsive padding
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-zinc-900 p-4 sm:p-6 md:p-8">
      {/* Card container with responsive width and padding */}
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
        {/* Header section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Please sign in to your account
          </p>
        </div>

        {/* Form section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email input group */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>

          {/* Password input group */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-sm sm:text-base"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me and forgot password */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base font-medium"
          >
            Sign in
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-8 text-center text-sm sm:text-base text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
