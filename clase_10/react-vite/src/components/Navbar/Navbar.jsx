import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Home } from "../../pages/Home/Home";
import { Products } from "../../pages/Products/Products";
import { Users } from "../../pages/Users/Users";

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/products", name: "Products", component: <Products /> },
  { path: "/users", name: "Users", component: <Users /> },
];

export function Navbar() {
  const { isLoggedIn, login, logout, user } = useAuth();

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
      <nav className="w-full flex flex-col xl:flex-row justify-between gap-5 items-center">
        <div className="flex items-center gap-5">
          {routes.map((route) => {
            return (
              <Link
                key={route.path}
                to={route.path}
                className="p-2 text-xl text-white hover:text-blue-500"
                style={{ textDecoration: "none" }}
              >
                {route.name}
              </Link>
            );
          })}
        </div>

        <div>
          {!isLoggedIn ? (
            <form
              className="flex flex-col md:flex-row gap-5"
              onSubmit={handleSubmit}
            >
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
            <div className="flex justify-center gap-2">
              <p className="text-white font-normal text-xl capitalize text-center bg-slate-700 rounded-full py-2 px-5 flex justify-center items-center">
                {user.username[0]}
              </p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
