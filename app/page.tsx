"use client";

import { useBlux } from "@bluxcc/react";

export default function Home() {
  const { isAuthenticated, isReady, user, login, logout } = useBlux();

  if (isAuthenticated) {
    return (
      <div>
        <p>Address: {user.address}</p>

        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <button type="button" disabled={!isReady} onClick={login}>
        Login
      </button>
    </div>
  );
}
