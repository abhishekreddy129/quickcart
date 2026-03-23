import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Phone", price: 10000 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Headphones", price: 2000 }
];

function ProductList({ onAddToCart }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;