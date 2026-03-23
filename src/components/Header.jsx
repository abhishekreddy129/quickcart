function Header({ cartCount, onCartClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#ddd" }}>
      <h2>QuickCart</h2>
      <button onClick={onCartClick}>
        🛒 Cart ({cartCount})
      </button>
    </div>
  );
}

export default Header;