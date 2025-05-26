import { useState } from "react";
import "./App.css";
import Login from "../frontend/src/components/auth/Login";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 to-white">
      <Login />
    </div>
  );
}

export default App;
