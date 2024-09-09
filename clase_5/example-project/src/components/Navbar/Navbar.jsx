import "./Navbar.css";
import { Banner } from "../Banner/Banner";

// Los componentes son funciones

// Componente con funcion flecha
// const Navbar = () => {
//   return (...)
// }

// Componente con funcion tradicional
function Navbar() {
  return (
    <div className="w-full bg-blue-900 text-slate-300 p-5 flex justify-between items-center">
      <h1 className="text-2xl">Mi Página</h1>

      <nav className="flex gap-5">
        <a className="text-slate-100 font-thin hover:text-blue-700" href="">
          Inicio
        </a>
        <a className="text-slate-100 font-thin hover:text-blue-700" href="">
          Productos
        </a>
        <a className="text-slate-100 font-thin hover:text-blue-700" href="">
          Nosotros
        </a>
      </nav>
    </div>
  );
}

// export default Navbar;
export { Navbar };
