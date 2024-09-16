import "./App.css";
import { useState, useEffect } from "react";
import { Card } from "./components/Card/Card";
import { getProducts } from "./services/products";
import { getUsers } from "./services/users";
import { UserCard } from "./components/UserCard/UserCard";

function App() {
  // const products = [
  //   { id: 1, title: "Laptop", description: "Dell Inspiron 15", price: 1000 },
  //   { id: 2, title: "IPhone", description: "Apple iPhone 14", price: 600 },
  //   { id: 3, title: "Mouse", description: "Microsoft Mouse", price: 200 },
  //   { id: 4, title: "Keyboard", description: "Apple Keyboard", price: 50 },
  //   { id: 5, title: "Monitor", description: "LG 27", price: 2000 },
  // ];

  const [contador, setContador] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const [objeto, setObjeto] = useState({});
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      console.log(products);
      setProducts(products);
    });

    getUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  // const incrementar = () => setContador(contador + 1);
  // const decrementar = () => {
  //   if (contador > 0) {
  //     setContador(contador - 1);
  //   }
  // };

  return (
    <>
      <h1 className="text-3xl font-bold">DaVinci</h1>

      {/* <section className="flex gap-4">
        <p>{contador}</p>

        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={incrementar}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={decrementar}
        >
          -
        </button>
      </section> */}

      {/* <section className="grid grid-cols-3 gap-4">
        <Card title="Laptop" description="Dell Inspiron 15" price={1000} />
        <Card title="IPhone" description="Apple iPhone 14" price={600} />
        <Card title="Mouse" description="Microsoft Mouse" price={200} />
        <Card title="Keyboard" description="Apple Keyboard" price={50} />
      </section> */}

      <section className="text-center p-5">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex flex-wrap gap-5">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            );
          })}
        </div>
      </section>

      <section className="text-center p-5">
        <h2 className="text-2xl font-bold">Users</h2>
        <div className="flex flex-wrap gap-5">
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                role={user.role}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
