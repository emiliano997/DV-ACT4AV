import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "./context/ModalContext";

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/products", name: "Products", component: <Products /> },
  { path: "/users", name: "Users", component: <Users /> },
];

function App() {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <ToastContainer />

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

          <footer>
            <p>DaVinci</p>
          </footer>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
