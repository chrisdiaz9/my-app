import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const LogInBtn = () => {
  const { login, register, isAuthenticated, user, logout } = useKindeAuth();
  return (
    <>
      {!isAuthenticated && (
        <>
          <button onClick={register} type="button">
            Register
          </button>
          <button onClick={login} type="button">
            Log In
          </button>
        </>
      )}
      {isAuthenticated && (
        <div>
          <button
            onClick={() => logout()}
            type="button"
            className="bg-zinc-900 text-white px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default LogInBtn;
