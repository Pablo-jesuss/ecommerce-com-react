import React from "react";

const LoginDemo = () => {
  const handleLogin = () => {
    console.log();
  };
  return (
    <div className="m-5 p-5">
      <button className="bg-primary px-4 text-white" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginDemo;
