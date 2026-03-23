import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total items
  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Total price
  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Header 
        cartCount={getTotalItems()} 
        onCartClick={() => setIsCartOpen(true)}
      />

      <ProductList onAddToCart={addToCart} />

      {isCartOpen && (
        <CartSidebar
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeItem}
          onClose={() => setIsCartOpen(false)}
          total={getTotalPrice()}
        />
      )}
    </div>
  );
}

export default App;