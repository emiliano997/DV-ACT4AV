import "./App.css";
// import miNavbar from "./components/Navbar";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";

// Componente App (Principal)
function App() {
  return (
    <section className="container">
      <h1>Titulo de Página</h1>

      <Navbar />
    </section>
  );
}

export default App;
