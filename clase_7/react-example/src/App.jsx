import "./App.css";
import { useState, useEffect } from "react";

import { getUsers } from "./services/users";
import { UserCard } from "./components/UserCard/UserCard";
import { useProducts } from "./hooks/useProducts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/products", name: "Products", component: <Products /> },
  { path: "/users", name: "Users", component: <Users /> },
];

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">DaVinci</h1>

      <BrowserRouter>
        <nav className="flex justify-between">
          {routes.map((route) => {
            console.log(route);

            return (
              <Link
                key={route.path}
                to={route.path}
                className="p-2 text-xl"
                style={{ textDecoration: "none" }}
              >
                {route.name}
              </Link>
            );
          })}
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} /> */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BrowserRouter>

      <footer>
        <p>DaVinci</p>
      </footer>
    </>
  );
}

export default App;
