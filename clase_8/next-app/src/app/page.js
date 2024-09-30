"use client";

import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Bienvenido {user}</h1>
        </div>
      ) : (
        <div>
          <h1>Bienvenido</h1>
        </div>
      )}
    </>
  );
}
