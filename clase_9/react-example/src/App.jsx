import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { NotFound } from "./components/NotFound/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/products", name: "Products", component: <Products /> },
  { path: "/users", name: "Users", component: <Users /> },
  { path: "/*", name: "404", component: <NotFound /> },
];

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        theme="dark"
      />

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
