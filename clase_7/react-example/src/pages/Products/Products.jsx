import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Card } from "../../components/Card/Card";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    useProducts().then(([products]) => {
      console.log(products);
      setProducts(products);
    });
  }, []);

  return (
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
  );
}
