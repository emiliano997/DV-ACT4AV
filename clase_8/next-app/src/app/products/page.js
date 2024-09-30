// Componente asincrono
// Server Component
export default async function ProductsPage() {
  // Operaciones asincronas
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <>
      <h2>Products</h2>

      <section className="flex flex-wrap gap-5 justify-center w-full items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-slate-200 p-5 m-5 w-80"
          >
            <h3 className="text-xl">{product.title}</h3>
            <p className="text-sm">{product.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
