"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export function Navbar() {
  const { isLoggedIn, login, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    const response = login(username, password);

    if (!response) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <header className="w-full flex items-center justify-between p-5 bg-slate-600">
      <nav className="w-full flex justify-between gap-5 items-center">
        <div className="flex items-center gap-5">
          <Link
            className="text-white font-thin hover:font-bold hover:underline-offset-2"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-white font-thin hover:font-bold hover:underline-offset-2"
            href={"/products"}
          >
            Products
          </Link>
          <Link
            className="text-white font-thin hover:font-bold hover:underline-offset-2"
            href={"/users"}
          >
            Users
          </Link>
        </div>

        <div>
          {!isLoggedIn ? (
            <form className="flex gap-5" onSubmit={handleSubmit}>
              <input
                className="border border-slate-200 p-2 w-50 rounded-lg"
                type="text"
                placeholder="Username"
                id="username"
              />
              <input
                className="border border-slate-200 p-2 w-50 rounded-lg"
                type="password"
                placeholder="Password"
                id="password"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </form>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => logout()}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}