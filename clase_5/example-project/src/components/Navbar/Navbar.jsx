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
    <div>
      <Banner />

      <nav>
        <a href="">Inicio</a>
        <a href="">Productos</a>
        <a href="">Nosotros</a>
      </nav>
    </div>
  );
}

// export default Navbar;
export { Navbar };
