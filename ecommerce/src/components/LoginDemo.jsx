import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const LoginDemo = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("Login realizado com sucesso");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
