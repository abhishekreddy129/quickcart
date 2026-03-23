function CartSidebar({ cart, onUpdateQuantity, onRemove, onClose, total }) {
  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: "300px",
      height: "100%",
      background: "#fff",
      borderLeft: "2px solid black",
      padding: "10px"
    }}>
      <button onClick={onClose}>Close ❌</button>

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>

            <button onClick={() => onRemove(item.id)}>Remove</button>
            <hr />
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartSidebar;