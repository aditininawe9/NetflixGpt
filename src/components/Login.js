import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-10 my-36 mx-auto right-0 left-0 text-white bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 my-4 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-3 my-4 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-4 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already registered! Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
