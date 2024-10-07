import "./App.css";
import { useState, useEffect } from "react";

import { getUsers } from "./services/users";
import { UserCard } from "./components/UserCard/UserCard";
import { useProducts } from "./hooks/useProducts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/products", name: "Products", component: <Products /> },
  { path: "/users", name: "Users", component: <Users /> },
];

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <footer>
        <p>DaVinci</p>
      </footer>
    </>
  );
}

export default App;
